"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Youtube, MessageSquare, MapPin, Sparkles, Award, ArrowUpRight } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

interface HeroProps {
  onPlaySongOnYoutube?: (title: string, url: string, videoId?: string) => void;
}

export default function Hero({ onPlaySongOnYoutube }: HeroProps) {
  // Front picture selector: defaults to 'alive' (user's requested front picture) and 'logo'
  const [activePhoto, setActivePhoto] = useState<"alive" | "logo" | "glory" | "antwerp">("alive");

  const handlePlayHeroSong = () => {
    if (onPlaySongOnYoutube) {
      onPlaySongOnYoutube("Bend Down Low", "https://youtu.be/Q4Udl2Fejzw", "Q4Udl2Fejzw");
    } else {
      window.open("https://youtu.be/Q4Udl2Fejzw", "_blank");
    }
  };

  const getCurrentImage = () => {
    switch (activePhoto) {
      case "alive":
        return "/images/im-alive-front.png";
      case "logo":
        return "/images/slim-d-viper-logo.jpg";
      case "glory":
        return "/images/slim-d-viper-glory.jpg";
      case "antwerp":
        return "/images/709821662_3656509337820755_4358512461566724801_n.jpg";
      default:
        return "/images/im-alive-front.png";
    }
  };

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#fbfbfd] bg-grid-light overflow-hidden">
      {/* Light Luxury Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-amber-100/60 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-gold-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Personal Details Highlight Banner: LIVES IN ANTWERP, BELGIUM */}
        <div className="mb-8 sm:mb-12 p-4 sm:p-5 rounded-2xl light-card border-l-4 border-l-[#d4af37] bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="flex h-3 w-3 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="font-heading font-black text-xs sm:text-sm tracking-[0.2em] text-black uppercase">
              Personal Details:
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-heading font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Lives in Antwerp, Belgium 🇧🇪</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-heading font-bold uppercase tracking-wider">
              <span>Origin: Koidu ➔ Kingtom, Sierra Leone 🇸🇱</span>
            </div>
          </div>

          <a
            href={ARTIST_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            <span>Direct Line: +32 492 32 78 51</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Main Grid: Headline & Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Bold Limkokwing-style Typography */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Official Badge with Logo Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black text-[#d4af37] text-xs font-heading font-black uppercase tracking-[0.2em] shadow-sm">
              <div className="relative w-4 h-4 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/images/slim-d-viper-logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <span>Untouchable Empire Records Official</span>
            </div>

            {/* Massive Bold Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-[0.35em] text-gray-600">
                Sierra Leonean Afro-Hip-Hop Rapper • The Money Man
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-black tracking-tighter text-black uppercase leading-[0.9]">
                SLIM <br />
                <span className="text-gold-gradient underline decoration-[#d4af37] decoration-4 underline-offset-8">
                  D’VIPER
                </span>
              </h1>
            </div>

            {/* Artist Motto */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 max-w-xl mx-auto lg:mx-0">
              <p className="text-xs sm:text-sm font-heading font-bold italic tracking-wide">
                "{ARTIST_DATA.motto}"
              </p>
              <div className="text-[10px] font-heading font-black uppercase tracking-widest text-[#b8860b] mt-1">
                ★ {ARTIST_DATA.movement} ★
              </div>
            </div>

            {/* Bio Synopsis */}
            <p className="text-gray-700 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Diamond soil of <span className="font-bold text-black">Koidu</span>, street cyphers of <span className="font-bold text-black">Kingtom (Freetown)</span>, and now <span className="font-bold text-black underline decoration-[#d4af37]">living in Antwerp, Belgium</span>. Taking authentic Sierra Leonean music to global stages.
            </p>

            {/* Live YouTube Play Trigger Card */}
            <div className="p-4 sm:p-5 rounded-2xl light-card border border-gray-200 bg-white shadow-md max-w-xl mx-auto lg:mx-0 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <button
                  onClick={handlePlayHeroSong}
                  className="w-14 h-14 rounded-2xl bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-md group flex-shrink-0"
                  title="Play video live on YouTube"
                  aria-label="Play video live on YouTube"
                >
                  <Youtube className="w-7 h-7 fill-white group-hover:scale-110 transition-transform" />
                </button>
                <div className="min-w-0 text-left">
                  <div className="text-[10px] uppercase tracking-widest text-red-600 font-heading font-black flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Live Video Stream • YouTube
                  </div>
                  <div className="text-base sm:text-lg font-heading font-black text-black truncate uppercase">
                    Bend Down Low (Official Video)
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    Untouchable Empire • Produced by Suh Clovis
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlayHeroSong}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-all flex-shrink-0 shadow-sm"
              >
                <span>Watch Live</span>
                <Play className="w-3 h-3 fill-current" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={handlePlayHeroSong}
                className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-md flex items-center gap-2.5"
              >
                <Youtube className="w-5 h-5 fill-white" />
                <span>Play Live Videos on YouTube</span>
              </button>

              <a
                href={ARTIST_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-sm flex items-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>WhatsApp (+32 492 32 78 51)</span>
              </a>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 max-w-2xl mx-auto lg:mx-0">
              {ARTIST_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5 text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-heading font-black text-black">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-heading font-bold uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Front Image Showcase (Defaults to I'M ALIVE + Official Logo) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Front Picture Switcher Tabs */}
            <div className="mb-4 flex flex-wrap justify-center p-1 rounded-xl bg-gray-200/90 border border-gray-300 gap-1 z-20">
              <button
                onClick={() => setActivePhoto("alive")}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activePhoto === "alive"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                💿 I'M ALIVE (Front)
              </button>
              <button
                onClick={() => setActivePhoto("logo")}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activePhoto === "logo"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                🐍 Official Logo
              </button>
              <button
                onClick={() => setActivePhoto("glory")}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activePhoto === "glory"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                👑 GLORY
              </button>
              <button
                onClick={() => setActivePhoto("antwerp")}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                  activePhoto === "antwerp"
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                📸 Antwerp
              </button>
            </div>

            {/* Front Showcase Card */}
            <div className="relative w-full max-w-md aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden light-card border-2 border-gray-300 shadow-2xl group bg-white">
              
              {/* Display Image */}
              <Image
                src={getCurrentImage()}
                alt="SLIM D’VIPER – Front artist showcase"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 500px"
              />

              {/* Verified Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-300 text-[10px] font-heading font-black uppercase tracking-wider text-black shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>
                  {activePhoto === "logo"
                    ? "Official Insignia Logo"
                    : activePhoto === "alive"
                    ? "I'M ALIVE (May 6 2023)"
                    : "Verified Artist • Antwerp, BE"}
                </span>
              </div>

              {/* Bottom Card Legend */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-[#b8860b]">
                    Untouchable Empire Label
                  </span>
                  <span className="text-xs font-heading font-bold text-gray-500">
                    Antwerp, Belgium 🇧🇪
                  </span>
                </div>
                <div className="font-heading font-black text-xl text-black uppercase tracking-wide">
                  SLIM D’VIPER
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600 pt-1 border-t border-gray-100">
                  <span className="font-medium italic">"The Money Man"</span>
                  <button
                    onClick={handlePlayHeroSong}
                    className="text-red-600 hover:text-red-700 font-heading font-black inline-flex items-center gap-1 uppercase"
                  >
                    Play Live on YouTube <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
