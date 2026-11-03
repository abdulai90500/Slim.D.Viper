"use client";

import React from "react";
import { Compass, Gem, Flame, Globe, Crown, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function JourneySection() {
  const getMilestoneIcon = (icon: string) => {
    switch (icon) {
      case "Gem":
        return <Gem className="w-5 h-5 text-amber-600" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-red-600" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-emerald-600" />;
      case "Crown":
        return <Crown className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Compass className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 relative bg-[#f8f9fa] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black text-[#d4af37] text-xs font-heading font-black uppercase tracking-[0.25em]">
            <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Career Odyssey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
            The Transatlantic <span className="text-gold-gradient">Journey</span>
          </h2>
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-heading font-black uppercase tracking-widest text-black flex-wrap">
            <span className="bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">Koidu 🇸🇱</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            <span className="bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">Kingtom 🇸🇱</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            <span className="bg-black text-white px-3 py-1 rounded-lg shadow-sm">Antwerp, Belgium 🇧🇪</span>
            <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            <span className="bg-[#d4af37] text-black px-3 py-1 rounded-lg shadow-sm">Global 🌍</span>
          </div>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Cards */}
        <div className="relative">
          {/* Vertical Central Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[3px] bg-gradient-to-b from-gray-200 via-[#d4af37] to-gray-200" />

          <div className="space-y-10 lg:space-y-14">
            {ARTIST_DATA.journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Point (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border-2 border-black items-center justify-center shadow-lg z-20">
                    {getMilestoneIcon(item.icon)}
                  </div>

                  {/* Card Content */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl light-card border-2 border-gray-200 bg-white light-card-hover space-y-4 shadow-md ${
                        isEven ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{item.flag}</span>
                          <span className="text-xs font-heading font-black uppercase tracking-widest text-[#b8860b]">
                            {item.phase}
                          </span>
                        </div>
                        <span className="text-xs font-heading font-bold text-gray-500 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 uppercase">
                          {item.year}
                        </span>
                      </div>

                      {/* Location & Title */}
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-heading font-bold uppercase mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                          <span>{item.location}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-heading font-black text-black uppercase">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlight Banner */}
                      <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-xs font-heading font-black uppercase tracking-wider text-black">
                        <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Key Highlight: {item.highlight}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
