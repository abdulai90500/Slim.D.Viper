"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Play, Youtube, MessageSquare, MapPin } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Personal Details", href: "#personal" },
    { name: "Music", href: "#music" },
    { name: "Videos", href: "#videos" },
    { name: "Journey", href: "#journey" },
    { name: "Empire", href: "#empire" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md py-2.5"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link href="#hero" className="group flex items-center gap-3">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-[#d4af37] shadow-sm flex-shrink-0 bg-black group-hover:scale-105 transition-transform">
              <Image
                src={ARTIST_DATA.logoUrl}
                alt="SLIM D’VIPER Official Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-heading font-black text-base sm:text-lg tracking-[0.12em] text-black uppercase leading-none">
                SLIM D’VIPER
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#b8860b] uppercase font-bold mt-1">
                The Money Man • Untouchable
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-gray-700 hover:text-black transition-colors relative py-1 font-bold group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Antwerp Location Pill */}
            <div className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              <span>Antwerp, Belgium 🇧🇪</span>
            </div>

            {/* YouTube Channel */}
            <a
              href={ARTIST_DATA.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-gray-300 hover:border-red-500 hover:bg-red-50 text-gray-700 hover:text-red-600 transition-all"
              title="Official YouTube Channel"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>

            {/* Direct WhatsApp Contact */}
            <a
              href={ARTIST_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs tracking-wider uppercase font-bold transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* Direct YouTube Play */}
            <a
              href={ARTIST_DATA.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Live</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-gray-300 text-black hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-5 mt-3 space-y-4 shadow-xl">
          <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold flex items-center gap-2 uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Lives in Antwerp, Belgium 🇧🇪</span>
          </div>

          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-gray-800 hover:text-[#d4af37] py-2 border-b border-gray-100 font-bold"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={ARTIST_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp: +32 492 32 78 51</span>
            </a>

            <a
              href={ARTIST_DATA.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-red-600 text-white font-bold text-xs tracking-wider uppercase shadow-sm"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>YouTube: @slimdviper6752</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
