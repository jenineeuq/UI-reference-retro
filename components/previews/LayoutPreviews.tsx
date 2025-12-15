"use client";

import { useState } from "react";
import {
  ChevronDown, ChevronLeft, ChevronRight, GripVertical,
  Heart, MessageCircle, Share, Image
} from "lucide-react";

// Card Preview
export function CardPreview() {
  return (
    <div className="w-full max-w-sm font-mono border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950 overflow-hidden">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center border-b-4 border-amber-500">
        <Image className="w-12 h-12 text-white/50" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold uppercase text-amber-900 dark:text-amber-100">Card Title</h3>
          <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
            This is a description of the card content in retro style.
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t-4 border-amber-400 dark:border-amber-600">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 uppercase font-bold">
              <Heart className="w-4 h-4" />
              <span>24</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 uppercase font-bold">
              <MessageCircle className="w-4 h-4" />
              <span>8</span>
            </button>
          </div>
          <button className="flex items-center gap-1 text-sm text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200">
            <Share className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Accordion Preview
export function AccordionPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: "What is your refund policy?", content: "We offer a 30-day money back guarantee. If you're not satisfied with our product, contact us for a full refund." },
    { title: "How do I change my password?", content: "Go to Settings > Security > Change Password. You'll need to enter your current password and then your new password twice." },
    { title: "Do you offer discounts?", content: "Yes! We offer student discounts, annual subscription discounts, and occasional promotional offers. Check our pricing page for current deals." },
  ];

  return (
    <div className="w-full max-w-md font-mono border-4 border-amber-600 dark:border-amber-500 overflow-hidden">
      {items.map((item, i) => (
        <div key={i} className="border-b-4 border-amber-500 last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 text-left bg-amber-100 dark:bg-amber-900 hover:bg-amber-200 dark:hover:bg-amber-800 transition-colors"
          >
            <span className="font-bold uppercase text-sm text-amber-900 dark:text-amber-100">{item.title}</span>
            <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          {openIndex === i && (
            <div className="px-4 py-3 bg-amber-50 dark:bg-amber-950 text-sm text-amber-700 dark:text-amber-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ScrollArea Preview
export function ScrollAreaPreview() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="w-full max-w-xs font-mono">
      <div className="text-sm font-bold uppercase text-amber-800 dark:text-amber-300 mb-2">■ Scrollable Content</div>
      <div className="h-48 overflow-auto border-4 border-amber-600 dark:border-amber-500 bg-amber-50 dark:bg-amber-950">
        <div className="p-2 space-y-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="px-3 py-2 border-2 border-amber-400 dark:border-amber-600 hover:bg-amber-200 dark:hover:bg-amber-800 text-sm text-amber-800 dark:text-amber-200 uppercase cursor-pointer transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ResizablePanels Preview
export function ResizablePanelsPreview() {
  const [leftWidth, setLeftWidth] = useState(40);

  return (
    <div className="w-full max-w-md h-48 flex border-4 border-amber-600 dark:border-amber-500 overflow-hidden font-mono">
      {/* Left panel */}
      <div style={{ width: `${leftWidth}%` }} className="bg-amber-100 dark:bg-amber-900 p-3">
        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase mb-2">■ Sidebar</div>
        <div className="space-y-1">
          {["Dashboard", "Projects", "Settings"].map((item) => (
            <div key={item} className="px-2 py-1 text-sm text-amber-800 dark:text-amber-200 border-2 border-transparent hover:border-amber-500 hover:bg-amber-200 dark:hover:bg-amber-800 cursor-pointer uppercase">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Resizer */}
      <div
        className="w-2 bg-amber-500 hover:bg-amber-400 cursor-col-resize flex items-center justify-center group border-x-2 border-amber-700"
        onMouseDown={(e) => {
          const startX = e.clientX;
          const startWidth = leftWidth;
          const onMove = (e: MouseEvent) => {
            const diff = ((e.clientX - startX) / 400) * 100;
            setLeftWidth(Math.min(70, Math.max(20, startWidth + diff)));
          };
          const onUp = () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
          };
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        }}
      >
        <GripVertical className="w-3 h-3 text-amber-900" />
      </div>

      {/* Right panel */}
      <div className="flex-1 p-3 bg-amber-50 dark:bg-amber-950">
        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase mb-2">■ Content</div>
        <div className="text-sm text-amber-700 dark:text-amber-300">
          Drag the handle to resize panels
        </div>
      </div>
    </div>
  );
}

// Carousel Preview
export function CarouselPreview() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { bg: "from-purple-400 to-pink-400" },
    { bg: "from-blue-400 to-cyan-400" },
    { bg: "from-green-400 to-emerald-400" },
    { bg: "from-orange-400 to-red-400" },
  ];

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="relative border-4 border-amber-600 dark:border-amber-500">
        {/* Slides */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`w-full flex-shrink-0 aspect-video bg-gradient-to-br ${slide.bg} flex items-center justify-center`}
              >
                <span className="text-white font-bold uppercase text-xl">Slide {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 border-4 border-amber-700 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 border-4 border-amber-700 bg-amber-500 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-4 h-4 border-2 transition-colors ${
              i === current ? "border-amber-700 bg-amber-500" : "border-amber-400 bg-amber-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Masonry Preview
export function MasonryPreview() {
  const items = [
    { height: 80, color: "from-purple-400 to-pink-400" },
    { height: 120, color: "from-blue-400 to-cyan-400" },
    { height: 60, color: "from-green-400 to-emerald-400" },
    { height: 100, color: "from-orange-400 to-red-400" },
    { height: 90, color: "from-violet-400 to-purple-400" },
    { height: 70, color: "from-teal-400 to-cyan-400" },
  ];

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="text-sm font-bold uppercase text-amber-800 dark:text-amber-300 mb-2">■ Masonry Grid</div>
      <div className="columns-2 gap-2 space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.color} border-4 border-amber-600 flex items-center justify-center break-inside-avoid shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]`}
            style={{ height: item.height }}
          >
            <span className="text-white font-bold">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
