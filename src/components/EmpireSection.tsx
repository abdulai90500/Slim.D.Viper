"use client";

import React from "react";
import { Crown, Target, HeartHandshake, Mic2, Clapperboard, Globe2, Users, ArrowUpRight } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function EmpireSection() {
  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Mic2 className="w-5 h-5 text-black" />;
      case 1:
        return <Clapperboard className="w-5 h-5 text-black" />;
      case 2:
        return <Globe2 className="w-5 h-5 text-black" />;
      case 3:
        return <Users className="w-5 h-5 text-black" />;
      default:
        return <Crown className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="empire" className="py-20 sm:py-28 relative bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black text-[#d4af37] text-xs font-heading font-black uppercase tracking-[0.25em]">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Record Label & Movement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
            Untouchable <span className="text-gold-gradient">Empire</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {ARTIST_DATA.empire.tagline}
          </p>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Mission Split Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision */}
          <div className="p-8 rounded-3xl light-card border-2 border-gray-200 bg-[#fbfbfd] space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-black text-[#d4af37] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div className="text-[11px] font-heading font-black uppercase tracking-widest text-[#b8860b]">
              The Grand Vision
            </div>
            <h3 className="text-2xl font-heading font-black text-black uppercase">
              Redefining West African Sonic Sovereignty
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To position Sierra Leonean Afro-Hip-Hop at the pinnacle of international music charts, establishing sustainable creative and economic pipelines between West Africa and the European diaspora.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 rounded-3xl light-card border-2 border-gray-200 bg-[#fbfbfd] space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37] text-black flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="text-[11px] font-heading font-black uppercase tracking-widest text-black">
              The Dedicated Mission
            </div>
            <h3 className="text-2xl font-heading font-black text-black uppercase">
              Empowering Talent & Authentic Culture
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To produce uncompromised musical compositions, cinematic visuals, and live tours that inspire self-reliance, hustle, and cultural pride among African youth everywhere.
            </p>
          </div>

        </div>

        {/* The 4 Pillars */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-black uppercase">
              The Four Pillars of Untouchable Empire
            </h3>
            <p className="text-xs font-heading font-bold uppercase tracking-widest text-gray-500 mt-1">
              Building a lasting institution, from audio engineering to youth mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTIST_DATA.empire.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl light-card border border-gray-200 light-card-hover space-y-3 bg-white"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200">
                    {getPillarIcon(idx)}
                  </div>
                  <span className="font-heading font-black text-lg text-gray-400">
                    {pillar.number}
                  </span>
                </div>

                <h4 className="font-heading font-black text-base text-black uppercase">
                  {pillar.title}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-xs font-heading font-black uppercase tracking-widest text-[#d4af37]">
              Executive Leadership
            </div>
            <div className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-wide">
              SLIM D’VIPER • The Money Man
            </div>
            <p className="text-xs text-gray-300">
              Living in Antwerp, Belgium • CEO of Untouchable Empire Records
            </p>
          </div>

          <a
            href={ARTIST_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-amber-400 text-black font-heading font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md flex-shrink-0"
          >
            <span>Label Inquiries via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
