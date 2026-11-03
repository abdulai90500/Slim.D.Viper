"use client";

import React from "react";
import { Phone, MessageSquare, Mail, Youtube, MapPin, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black text-[#d4af37] text-xs font-heading font-black uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Direct Management & Booking Representation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
            Connect With <span className="text-gold-gradient">SLIM D’VIPER</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            For international festival headlines, club tours, concert appearances, collaborations, and media inquiries.
          </p>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        {/* VIP Contact Grid (No Booking Form - All Direct) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Official WhatsApp (Requested) */}
          <div className="p-8 rounded-3xl light-card border-2 border-emerald-400 bg-emerald-50/40 shadow-lg space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                  <MessageSquare className="w-7 h-7 fill-white" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 text-[10px] font-heading font-black uppercase tracking-wider">
                  Fastest Response
                </span>
              </div>

              <div>
                <div className="text-xs font-heading font-black uppercase tracking-widest text-emerald-800">
                  Official WhatsApp Contact
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-black mt-1">
                  +32 492 32 78 51
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Direct WhatsApp messaging for promoter reservations, tour inquiries, and management communications.
                </p>
              </div>
            </div>

            <a
              href={ARTIST_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Direct Phone Line */}
          <div className="p-8 rounded-3xl light-card border-2 border-gray-200 bg-white shadow-lg space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-black text-[#d4af37] flex items-center justify-center shadow-md">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-[10px] font-heading font-black uppercase tracking-wider">
                  Belgium Hotline
                </span>
              </div>

              <div>
                <div className="text-xs font-heading font-black uppercase tracking-widest text-[#b8860b]">
                  Direct Management Phone
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-black mt-1">
                  +32 492 32 78 51
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Headquarters: Antwerp, Belgium. Available for calls Mon–Sat (10:00–20:00 CET).
                </p>
              </div>
            </div>

            <a
              href="tel:+32492327851"
              className="w-full py-4 rounded-xl bg-black hover:bg-gray-800 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +32 492 32 78 51</span>
            </a>
          </div>

          {/* Card 3: Official YouTube Channel */}
          <div className="p-8 rounded-3xl light-card border-2 border-red-300 bg-red-50/40 shadow-lg space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md">
                  <Youtube className="w-7 h-7 fill-white" />
                </div>
                <span className="px-3 py-1 rounded-full bg-red-200 text-red-900 text-[10px] font-heading font-black uppercase tracking-wider">
                  Verified Channel
                </span>
              </div>

              <div>
                <div className="text-xs font-heading font-black uppercase tracking-widest text-red-700">
                  Official YouTube Channel
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-black text-black mt-1">
                  @slimdviper6752
                </div>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  Stream every song directly on YouTube, watch high-definition music videos, and subscribe.
                </p>
              </div>
            </div>

            <a
              href={ARTIST_DATA.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Secondary Details: Email & Personal Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl light-card border border-gray-200 flex items-center gap-4 bg-white">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-500">
                Official Booking Email
              </div>
              <a
                href="mailto:booking@untouchableempire.com"
                className="text-base font-heading font-black text-black hover:text-[#b8860b] transition-colors"
              >
                booking@untouchableempire.com
              </a>
            </div>
          </div>

          <div className="p-6 rounded-2xl light-card border border-gray-200 flex items-center gap-4 bg-white">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-black flex-shrink-0">
              <MapPin className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <div className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-500">
                Personal Residence & Base
              </div>
              <div className="text-base font-heading font-black text-black">
                Lives in Antwerp, Belgium 🇧🇪 (Origin: Sierra Leone 🇸🇱)
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
