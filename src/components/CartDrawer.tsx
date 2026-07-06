/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "../context/CartContext";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Tag,
  Truck,
  CreditCard,
  CheckCircle2,
  Sparkles,
  RefreshCw
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discountAmount,
    applyDiscount,
    appliedCode,
    shippingCost,
    shippingZip,
    updateShippingZip,
    isCartOpen,
    setIsCartOpen,
    isFreeShipping,
    shippingThreshold
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState(false);
  const [couponSuccess, setCouponSuccess] = useState(false);
  const [zipInput, setZipInput] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // Free shipping percentage progress
  const progressPercent = Math.min((subtotal / shippingThreshold) * 100, 100);
  const amountNeededForFreeShipping = shippingThreshold - subtotal;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(false);
    setCouponSuccess(false);

    if (couponInput.trim()) {
      const success = applyDiscount(couponInput);
      if (success) {
        setCouponSuccess(true);
        setCouponInput("");
      } else {
        setCouponError(true);
      }
    }
  };

  const handleZipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipInput.trim().length === 5) {
      updateShippingZip(zipInput);
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    setIsCheckingOut(true);

    // Simulate luxury secure transaction checkout
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 3000);
  };

  const handleCloseCheckoutComplete = () => {
    setCheckoutComplete(false);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-text/40 backdrop-blur-xs z-50"
          />

          {/* Drawer container */}
          <motion.div
            id="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[460px] bg-brand-bg border-l border-brand-border shadow-2xl z-55 flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-brand-border bg-brand-bg-secondary flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg font-bold text-brand-text">Your Cart</span>
                <span className="bg-brand-text text-brand-bg px-2 py-0.5 rounded-full text-[10px] font-mono">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                id="cart-close"
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:text-brand-cta transition-colors focus:outline-none"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {checkoutComplete ? (
                /* Checkout Success View */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="w-16 h-16 bg-brand-cta/20 text-brand-cta rounded-full flex items-center justify-center border border-brand-cta/40 animate-pulse-slow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-brand-text">Thank You for Your Order</h3>
                  <p className="text-brand-muted text-xs font-mono">ORDER #AURA-294719-2026</p>
                  <p className="text-brand-text text-sm leading-relaxed max-w-sm pt-2">
                    Your handcrafted desk shelf variant is being prepared in our workshop. A confirmation email with FedEx tracking details has been sent to your address.
                  </p>
                  <button
                    id="cart-complete-close"
                    onClick={handleCloseCheckoutComplete}
                    className="mt-6 bg-brand-text text-brand-bg hover:bg-brand-cta transition-all px-8 py-3 rounded text-xs font-mono uppercase tracking-widest"
                  >
                    Continue Browsing
                  </button>
                </motion.div>
              ) : items.length === 0 ? (
                /* Empty Cart View */
                <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-bg-secondary flex items-center justify-center border border-brand-border">
                    <Truck className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-brand-text">Your cart is empty</h3>
                  <p className="text-brand-muted text-xs max-w-xs leading-relaxed">
                    Elevate your workspace ergonomics today. Select a premium solid timber finish below to add to your order.
                  </p>
                  <button
                    id="cart-empty-shop-now"
                    onClick={() => setIsCartOpen(false)}
                    className="bg-brand-text text-brand-bg hover:bg-brand-cta transition-colors px-6 py-2.5 rounded text-xs font-mono uppercase tracking-widest cursor-pointer"
                  >
                    Shop Shelves
                  </button>
                </div>
              ) : (
                /* Cart Items List */
                <>
                  {/* Shipping Progress bar (CRO tactic) */}
                  <div className="bg-brand-bg-secondary p-4 rounded-lg border border-brand-border space-y-2.5">
                    <div className="flex items-center space-x-2 text-xs font-mono text-brand-text">
                      <Truck className="w-4 h-4 text-brand-cta" />
                      {isFreeShipping ? (
                        <span className="font-semibold text-brand-text">
                          Congratulations! You've unlocked <span className="text-brand-cta font-bold">Free Express Shipping</span>
                        </span>
                      ) : (
                        <span>
                          Add <strong className="font-bold">${amountNeededForFreeShipping.toFixed(2)}</strong> more for Free Shipping
                        </span>
                      )}
                    </div>
                    <div className="w-full bg-brand-border h-1.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-brand-cta h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="divide-y divide-brand-border/60">
                    {items.map((item) => (
                      <div key={item.variantId} className="py-4 flex space-x-4 first:pt-0 last:pb-0">
                        <img
                          src={item.image}
                          alt={item.variantName}
                          referrerPolicy="no-referrer"
                          className="w-20 h-20 object-cover border border-brand-border rounded bg-white shrink-0"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-serif text-sm font-semibold text-brand-text">
                                {item.variantName}
                              </h4>
                              <p className="text-[10px] font-mono text-brand-muted uppercase tracking-wide">
                                Timber: {item.timberType}
                              </p>
                            </div>
                            <button
                              id={`cart-remove-${item.variantId}`}
                              onClick={() => removeFromCart(item.variantId)}
                              className="text-brand-accent hover:text-red-500 transition-colors p-1"
                              aria-label={`Remove ${item.variantName} from cart`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-brand-border bg-brand-bg-secondary rounded h-8 overflow-hidden">
                              <button
                                id={`cart-dec-${item.variantId}`}
                                onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                                className="px-2.5 py-1 text-brand-muted hover:text-brand-text hover:bg-brand-border/40 transition-colors h-full focus:outline-none"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-3 text-xs font-mono font-bold text-brand-text">
                                {item.quantity}
                              </span>
                              <button
                                id={`cart-inc-${item.variantId}`}
                                onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                                className="px-2.5 py-1 text-brand-muted hover:text-brand-text hover:bg-brand-border/40 transition-colors h-full focus:outline-none"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Prices */}
                            <div className="text-right">
                              <span className="font-mono text-sm font-bold text-brand-text">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              {item.originalPrice > item.price && (
                                <p className="text-[10px] font-mono text-brand-muted line-through">
                                  ${(item.originalPrice * item.quantity).toFixed(2)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Shipping Estimator (CRO utility) */}
                  <div className="border-t border-brand-border/60 pt-4 space-y-3">
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                      Estimate Local Shipping & Taxes
                    </span>
                    <form onSubmit={handleZipSubmit} className="flex gap-2">
                      <input
                        id="cart-zip-input"
                        type="text"
                        maxLength={5}
                        placeholder="Enter 5-digit US ZIP Code"
                        value={zipInput}
                        onChange={(e) => setZipInput(e.target.value.replace(/\D/g, "").slice(0, 5))}
                        className="flex-1 bg-brand-bg-secondary border border-brand-border text-xs px-3 py-2 rounded focus:outline-none focus:border-brand-cta font-mono"
                      />
                      <button
                        id="cart-zip-submit"
                        type="submit"
                        className="bg-brand-bg-secondary text-brand-text border border-brand-border hover:bg-brand-border transition-colors px-4 py-2 rounded text-xs font-mono"
                      >
                        Apply
                      </button>
                    </form>
                    {shippingZip && (
                      <p className="text-[10px] font-mono text-brand-cta flex items-center">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Shipping address locked to ZIP: <strong className="font-semibold ml-1">{shippingZip}</strong>
                      </p>
                    )}
                  </div>

                  {/* Coupon Application */}
                  <div className="border-t border-brand-border/60 pt-4 space-y-3">
                    <span className="font-mono text-[10px] text-brand-muted uppercase tracking-widest block">
                      Promotional Discount Code
                    </span>
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-muted" />
                        <input
                          id="cart-coupon-input"
                          type="text"
                          placeholder="e.g., WORKSPACE10"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="w-full bg-brand-bg-secondary border border-brand-border pl-8 pr-3 py-2 text-xs rounded focus:outline-none focus:border-brand-cta font-mono placeholder-brand-muted/40 uppercase"
                        />
                      </div>
                      <button
                        id="cart-coupon-submit"
                        type="submit"
                        className="bg-brand-bg-secondary text-brand-text border border-brand-border hover:bg-brand-border transition-colors px-4 py-2 rounded text-xs font-mono"
                      >
                        Apply
                      </button>
                    </form>

                    {couponError && (
                      <p className="text-[10px] font-mono text-red-500">
                        Invalid discount code. Try: <strong>WORKSPACE10</strong> (10% off) or <strong>AURA20</strong> ($20 off).
                      </p>
                    )}

                    {couponSuccess && (
                      <p className="text-[10px] font-mono text-brand-cta flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Code applied successfully!
                      </p>
                    )}

                    {appliedCode && (
                      <div className="bg-brand-cta/10 border border-brand-cta/20 px-3 py-2 rounded flex items-center justify-between text-xs font-mono text-brand-text">
                        <span className="flex items-center">
                          <Tag className="w-3.5 h-3.5 text-brand-cta mr-1.5" />
                          Code Applied: <strong>{appliedCode}</strong>
                        </span>
                        <span className="text-brand-cta font-semibold">
                          -${discountAmount.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Sticky Checkout Subtotal Footer */}
            {!checkoutComplete && items.length > 0 && (
              <div className="p-6 bg-brand-bg-secondary border-t border-brand-border space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-brand-muted">
                    <span>Cart Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-xs font-mono text-brand-cta font-medium">
                      <span>Applied Discount</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-xs font-mono text-brand-muted">
                    <span>Shipping Estimate</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-brand-cta font-bold">FREE</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm font-mono text-brand-text font-bold border-t border-brand-border/60 pt-2.5">
                    <span>Estimated Total</span>
                    <span className="text-base text-brand-text font-bold">
                      ${Math.max(0, subtotal - discountAmount + shippingCost).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  id="cart-checkout"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-brand-text text-brand-bg hover:bg-brand-cta disabled:bg-brand-muted transition-all duration-300 py-4 font-mono text-xs uppercase tracking-widest rounded flex items-center justify-center space-x-2.5 shadow-sm select-none cursor-pointer"
                >
                  {isCheckingOut ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing Secure Payment...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>Proceed to Secure Checkout</span>
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center space-x-1 text-[10px] font-mono text-brand-muted">
                  <svg className="w-3.5 h-3.5 text-brand-cta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>SSL Encrypted Checkout • Fast FedEx Delivery</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
