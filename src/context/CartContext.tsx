/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, ProductVariant } from "../types";

interface CartContextType {
  items: CartItem[];
  addToCart: (variant: ProductVariant, quantity: number, timberType: string) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discountCode: string;
  discountAmount: number;
  applyDiscount: (code: string) => boolean;
  shippingCost: number;
  shippingZip: string;
  updateShippingZip: (zip: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  appliedCode: string;
  isFreeShipping: boolean;
  shippingThreshold: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "aura_storefront_cart_items";
const DISCOUNT_CODES: { [key: string]: number } = {
  "WORKSPACE10": 0.1,  // 10% Off
  "AURA20": 20,         // $20 Flat Off
  "AURA5": 5            // $5 Flat Off
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCode, setAppliedCode] = useState<string>("");
  const [shippingZip, setShippingZip] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const shippingThreshold = 100; // Free shipping over $100

  // Load from LocalStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  // Save to LocalStorage
  const saveItems = (newItems: CartItem[]) => {
    setItems(newItems);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newItems));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  };

  const addToCart = (variant: ProductVariant, quantity: number, timberType: string) => {
    const existingIndex = items.findIndex((item) => item.variantId === variant.id);

    if (existingIndex > -1) {
      const updated = [...items];
      updated[existingIndex].quantity += quantity;
      saveItems(updated);
    } else {
      const newItem: CartItem = {
        id: variant.id,
        variantId: variant.id,
        variantName: variant.name,
        finish: variant.finish,
        price: variant.price,
        originalPrice: variant.originalPrice,
        image: variant.image,
        quantity: quantity,
        timberType: timberType
      };
      saveItems([...items, newItem]);
    }
    // Automatically open cart drawer
    setIsCartOpen(true);
  };

  const removeFromCart = (variantId: string) => {
    const updated = items.filter((item) => item.variantId !== variantId);
    saveItems(updated);
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }
    const updated = items.map((item) => {
      if (item.variantId === variantId) {
        return { ...item, quantity };
      }
      return item;
    });
    saveItems(updated);
  };

  const clearCart = () => {
    saveItems([]);
    setAppliedCode("");
  };

  const applyDiscount = (code: string): boolean => {
    const sanitized = code.trim().toUpperCase();
    if (DISCOUNT_CODES[sanitized] !== undefined) {
      setAppliedCode(sanitized);
      return true;
    }
    return false;
  };

  // Calculations
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCode) {
    const discountVal = DISCOUNT_CODES[appliedCode];
    if (discountVal < 1) {
      // It's a percentage
      discountAmount = subtotal * discountVal;
    } else {
      // Flat discount
      discountAmount = Math.min(discountVal, subtotal);
    }
  }

  const isFreeShipping = subtotal >= shippingThreshold;
  // Cost calculation based on zip (simple rule: if first number is odd, standard shipping $10, else $15, free if above threshold)
  const shippingCost = isFreeShipping
    ? 0
    : items.length === 0
    ? 0
    : shippingZip
    ? parseInt(shippingZip.charAt(0)) % 2 === 0
      ? 12.0
      : 8.0
    : 10.0; // Default standard shipping

  const updateShippingZip = (zip: string) => {
    // Only save numeric characters, max 5 length
    const cleanZip = zip.replace(/\D/g, "").slice(0, 5);
    setShippingZip(cleanZip);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discountCode: appliedCode,
        discountAmount,
        applyDiscount,
        shippingCost,
        shippingZip,
        updateShippingZip,
        isCartOpen,
        setIsCartOpen,
        appliedCode,
        isFreeShipping,
        shippingThreshold
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
