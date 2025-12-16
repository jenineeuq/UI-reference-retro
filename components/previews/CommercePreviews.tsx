"use client";

import { useState } from "react";
import {
  ShoppingCart, X, Plus, Minus, CreditCard, Check, Star,
  Image as ImageIcon
} from "lucide-react";

// ProductCard Preview
export function ProductCardPreview() {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="w-full max-w-xs font-mono border-4 theme-border theme-bg overflow-hidden">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center border-b-4 theme-border relative">
        <ImageIcon className="w-16 h-16 text-white/50" />
        <span className="absolute top-2 right-2 px-2 py-0.5 bg-red-500 text-white text-xs font-bold uppercase">
          -20%
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} className={`w-4 h-4 ${i <= 4 ? "text-yellow-500 fill-yellow-500" : "theme-text-muted"}`} />
          ))}
          <span className="text-xs theme-text-subtle ml-1">(42)</span>
        </div>

        <h3 className="font-bold uppercase theme-text">Retro Product</h3>
        <p className="text-sm theme-text-muted">Classic vintage item with pixel-perfect design</p>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold theme-text">$79.99</span>
          <span className="text-sm theme-text-subtle line-through">$99.99</span>
        </div>

        <button
          onClick={() => setInCart(!inCart)}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 border-4 font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
            inCart
              ? "border-green-600 bg-green-500 text-white"
              : "theme-border theme-accent-bg text-white hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
          }`}
        >
          {inCart ? <><Check className="w-4 h-4" /> Added</> : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>}
        </button>
      </div>
    </div>
  );
}

// CartDrawer Preview
export function CartDrawerPreview() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 1, name: "Retro Widget", price: 29.99, qty: 2 },
    { id: 2, name: "Pixel Gadget", price: 49.99, qty: 1 },
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="font-mono">
      <button
        onClick={() => setOpen(true)}
        className="relative px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        Cart
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold flex items-center justify-center border-2 border-red-700">
          {items.length}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div className="w-full max-w-sm h-full border-l-4 theme-border theme-bg flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-4 theme-border theme-bg-header">
              <h2 className="font-bold uppercase theme-text">■ Shopping Cart</h2>
              <button onClick={() => setOpen(false)} className="p-1 hover:theme-bg-header hover:theme-bg-header">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-auto p-4 space-y-3">
              {items.map(item => (
                <div key={item.id} className="flex gap-3 p-3 border-4 theme-border-light theme-bg-dark">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 border-2 theme-border flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="w-6 h-6 text-white/50" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm uppercase theme-text">{item.name}</h4>
                    <p className="theme-text-muted">${item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 border-2 theme-border theme-bg-header hover:theme-bg-header">
                        <Minus className="w-4 h-4 mx-auto" />
                      </button>
                      <span className="font-bold theme-text">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 border-2 theme-border theme-bg-header hover:theme-bg-header">
                        <Plus className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t-4 theme-border theme-bg-header space-y-3">
              <div className="flex justify-between text-lg font-bold theme-text uppercase">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full px-4 py-3 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// CheckoutForm Preview
export function CheckoutFormPreview() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg">
      {/* Progress */}
      <div className="flex border-b-4 theme-border">
        {["Shipping", "Payment", "Review"].map((s, i) => (
          <button
            key={s}
            onClick={() => setStep(i + 1)}
            className={`flex-1 px-4 py-2 text-xs font-bold uppercase ${
              step === i + 1
                ? "theme-accent-bg text-white"
                : step > i + 1
                ? "bg-green-500 text-white"
                : "theme-bg-header theme-text-muted"
            }`}
          >
            {step > i + 1 ? "✓" : i + 1}. {s}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-4">
        {step === 1 && (
          <>
            <h3 className="font-bold uppercase theme-text mb-3">■ Shipping Address</h3>
            <input placeholder="FULL NAME..." className="w-full px-3 py-2 border-4 theme-border theme-bg-dark text-sm uppercase focus:outline-none" />
            <input placeholder="ADDRESS..." className="w-full px-3 py-2 border-4 theme-border theme-bg-dark text-sm uppercase focus:outline-none" />
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="CITY..." className="px-3 py-2 border-4 theme-border theme-bg-dark text-sm uppercase focus:outline-none" />
              <input placeholder="ZIP..." className="px-3 py-2 border-4 theme-border theme-bg-dark text-sm uppercase focus:outline-none" />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="font-bold uppercase theme-text mb-3">■ Payment Details</h3>
            <div className="flex items-center gap-2 px-3 py-2 border-4 theme-border theme-bg-dark">
              <CreditCard className="w-5 h-5 theme-text-subtle" />
              <input placeholder="CARD NUMBER..." className="flex-1 bg-transparent text-sm uppercase focus:outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="MM/YY" className="px-3 py-2 border-4 theme-border theme-bg-dark text-sm uppercase focus:outline-none" />
              <input placeholder="CVC" className="px-3 py-2 border-4 theme-border theme-bg-dark text-sm uppercase focus:outline-none" />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="font-bold uppercase theme-text mb-3">■ Order Summary</h3>
            <div className="space-y-2 p-3 border-4 theme-border-light theme-bg-dark">
              <div className="flex justify-between text-sm">
                <span className="theme-text-muted">Subtotal</span>
                <span className="font-bold theme-text">$129.98</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="theme-text-muted">Shipping</span>
                <span className="font-bold theme-text">$9.99</span>
              </div>
              <div className="flex justify-between text-sm border-t-2 theme-border-light pt-2">
                <span className="font-bold theme-text uppercase">Total</span>
                <span className="font-bold theme-text">$139.97</span>
              </div>
            </div>
          </>
        )}

        <div className="flex gap-2 pt-2">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 px-4 py-2 border-4 theme-border font-bold uppercase theme-text-muted hover:theme-bg-header hover:theme-bg-header"
            >
              Back
            </button>
          )}
          <button
            onClick={() => step < 3 ? setStep(step + 1) : null}
            className="flex-1 px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            {step === 3 ? "Place Order" : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

// PricingTable Preview
export function PricingTablePreview() {
  const plans = [
    { name: "Basic", price: "$9", features: ["5 Projects", "10GB Storage", "Email Support"] },
    { name: "Pro", price: "$29", features: ["Unlimited Projects", "100GB Storage", "Priority Support", "API Access"], popular: true },
    { name: "Enterprise", price: "$99", features: ["Everything in Pro", "Custom Domain", "24/7 Support", "SLA"] },
  ];

  return (
    <div className="font-mono">
      <div className="grid grid-cols-3 gap-3">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`border-4 p-4 relative ${
              plan.popular
                ? "theme-border theme-bg-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "theme-border-light theme-bg"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 theme-accent-bg text-white text-xs font-bold uppercase">
                Popular
              </span>
            )}
            <h3 className="font-bold uppercase theme-text">{plan.name}</h3>
            <div className="text-2xl font-bold theme-text my-2">
              {plan.price}<span className="text-sm theme-text-subtle">/mo</span>
            </div>
            <ul className="space-y-1 mb-4">
              {plan.features.map(f => (
                <li key={f} className="flex items-center gap-1 text-xs theme-text-muted">
                  <Check className="w-3 h-3 text-green-500" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full px-3 py-2 border-4 font-bold uppercase text-xs ${
              plan.popular
                ? "theme-border theme-accent-bg text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "theme-border theme-text-muted hover:theme-bg-header hover:theme-bg-header"
            }`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
