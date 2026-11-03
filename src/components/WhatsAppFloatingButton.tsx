"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end pointer-events-auto"
    >
      {/* Tooltip Popup (Only appears on hover or click) */}
      {showTooltip && (
        <div className="mb-2 p-3.5 rounded-2xl bg-white border-2 border-emerald-500 shadow-2xl max-w-xs space-y-2 relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-black p-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-heading font-black uppercase tracking-wider text-emerald-700">
              Direct Artist WhatsApp
            </span>
          </div>
          <p className="text-xs text-gray-700 font-medium">
            Contact SLIM D’VIPER management in Antwerp, Belgium directly.
          </p>
          <div className="text-xs font-heading font-black text-black">
            +32 492 32 78 51
          </div>
          <a
            href={ARTIST_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Open WhatsApp Chat
          </a>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative flex items-center gap-2 group">
        <a
          href={ARTIST_DATA.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-200"
          aria-label="Chat with Slim D'Viper on WhatsApp at +32492327851"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
          <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        </a>

        {/* Small dismiss button on top right of the badge */}
        <button
          onClick={() => setDismissed(true)}
          className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center text-[10px] shadow-sm self-start opacity-0 group-hover:opacity-100 transition-opacity"
          title="Dismiss WhatsApp button"
          aria-label="Dismiss"
        >
          ✕
        </button>
      </div>
    </aside>
  );
}
