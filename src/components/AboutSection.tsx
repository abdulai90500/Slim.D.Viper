"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Compass, Sparkles, MapPin, CheckCircle2, User, Globe, Music } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function AboutSection() {
  return (
    <section id="personal" className="py-20 sm:py-28 relative bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black text-[#d4af37] text-xs font-heading font-black uppercase tracking-[0.25em]">
            <User className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Artist Profile & Personal Details</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
            Personal Details & <span className="text-gold-gradient">Biography</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            SLIM D’VIPER — Born in Sierra Leone, currently living in Antwerp, Belgium.
          </p>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Personal Details Dashboard Card */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl light-card border-l-4 border-l-red-500 bg-[#fafafa]">
            <div className="text-[10px] font-heading font-black uppercase tracking-widest text-red-600">
              Current Residence
            </div>
            <div className="text-lg font-heading font-black text-black mt-1 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>Antwerp, Belgium 🇧🇪</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Active in European music tours
            </div>
          </div>

          <div className="p-5 rounded-2xl light-card border-l-4 border-l-emerald-500 bg-[#fafafa]">
            <div className="text-[10px] font-heading font-black uppercase tracking-widest text-emerald-600">
              Heritage & Origin
            </div>
            <div className="text-lg font-heading font-black text-black mt-1">
              Koidu ➔ Kingtom 🇸🇱
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Sierra Leonean Afro-Hip-Hop
            </div>
          </div>

          <div className="p-5 rounded-2xl light-card border-l-4 border-l-[#d4af37] bg-[#fafafa]">
            <div className="text-[10px] font-heading font-black uppercase tracking-widest text-[#b8860b]">
              Official Moniker
            </div>
            <div className="text-lg font-heading font-black text-black mt-1">
              "The Money Man"
            </div>
            <div className="text-xs text-gray-500 mt-1">
              King of the Cyphers
            </div>
          </div>

          <div className="p-5 rounded-2xl light-card border-l-4 border-l-black bg-[#fafafa]">
            <div className="text-[10px] font-heading font-black uppercase tracking-widest text-gray-600">
              Record Label & Movement
            </div>
            <div className="text-lg font-heading font-black text-black mt-1">
              Untouchable Empire
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Founder & Chief Executive Officer
            </div>
          </div>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos from the Images Folder */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden light-card border-2 border-gray-200 shadow-xl">
              <Image
                src="/images/709821662_3656509337820755_4358512461566724801_n.jpg"
                alt="SLIM D’VIPER in Antwerp, Belgium"
                fill
                className="object-cover object-top filter contrast-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg">
                <p className="text-xs font-medium italic text-gray-800">
                  "Living in Antwerp, Belgium while keeping my roots strong in Sierra Leone. We represent our culture with pride and power."
                </p>
                <p className="text-[11px] font-heading font-black uppercase tracking-wider text-[#b8860b] mt-2">
                  — SLIM D’VIPER (Antwerp, Belgium)
                </p>
              </div>
            </div>

            {/* Second Image Badge */}
            <div className="mt-4 p-3 rounded-2xl light-card flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                <Image
                  src="/images/slim-d-viper-glory.jpg"
                  alt="GLORY cover thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-heading font-black uppercase tracking-wider text-[#b8860b]">
                  Featured Release
                </div>
                <div className="text-sm font-heading font-black text-black truncate uppercase">
                  GLORY (Official Crown Single)
                </div>
                <div className="text-xs text-gray-500">Untouchable Empire Label Record</div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-heading font-bold text-black border-l-4 border-l-[#d4af37] pl-4 leading-snug">
              {ARTIST_DATA.bio.lead}
            </p>

            {ARTIST_DATA.bio.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}

            {/* The 3 Pillars */}
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <h3 className="text-xs font-heading font-black uppercase tracking-[0.25em] text-black">
                The Three Pillars of SLIM D’VIPER
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ARTIST_DATA.bio.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl light-card border border-gray-200 light-card-hover space-y-2 bg-[#fafafa]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-black text-[#d4af37] flex items-center justify-center font-heading font-black text-xs">
                      0{idx + 1}
                    </div>
                    <div className="text-sm font-heading font-black text-black uppercase">
                      {pillar.title}
                    </div>
                    <p className="text-xs text-gray-600 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct YouTube channel CTA */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={ARTIST_DATA.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-sm"
              >
                <span>Subscribe on YouTube</span>
              </a>

              <a
                href={ARTIST_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-sm"
              >
                <span>WhatsApp: +32 492 32 78 51</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
