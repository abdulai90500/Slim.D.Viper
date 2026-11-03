"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Youtube, Facebook, Instagram, Music, Disc, MessageSquare, Phone, Mail, ArrowUp, MapPin } from "lucide-react";
import { ARTIST_DATA } from "@/data/artist-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-28 sm:pb-24 relative overflow-hidden border-t-4 border-[#d4af37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-[#d4af37] shadow-md flex-shrink-0 bg-black">
                <Image
                  src={ARTIST_DATA.logoUrl}
                  alt="SLIM D’VIPER Official Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-heading font-black text-lg tracking-[0.15em] text-white uppercase">
                  SLIM D’VIPER
                </div>
                <div className="text-[10px] tracking-[0.25em] text-[#d4af37] uppercase font-bold">
                  The Money Man • Untouchable Empire
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Sierra Leonean Afro-Hip-Hop artist living in Antwerp, Belgium. Bridging West African grit with international sound systems and global audiences.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-heading font-bold uppercase tracking-wider text-[#d4af37]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Current Residence: Antwerp, Belgium 🇧🇪</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={ARTIST_DATA.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-5 h-5 fill-white" />
              </a>

              <a
                href={ARTIST_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
              </a>

              <a
                href={ARTIST_DATA.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 fill-white" />
              </a>

              <a
                href={ARTIST_DATA.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center transition-all shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={ARTIST_DATA.socials.audiomack}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-600 text-black flex items-center justify-center transition-all shadow-md"
                aria-label="Audiomack"
              >
                <Disc className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-black uppercase tracking-[0.2em] text-[#d4af37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-heading font-bold uppercase tracking-wider">
              <li>
                <a href="#hero" className="hover:text-[#d4af37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#personal" className="hover:text-[#d4af37] transition-colors">Personal Details</a>
              </li>
              <li>
                <a href="#music" className="hover:text-[#d4af37] transition-colors">Music & Singles</a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#d4af37] transition-colors">YouTube Videos</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-[#d4af37] transition-colors">Odyssey</a>
              </li>
              <li>
                <a href="#empire" className="hover:text-[#d4af37] transition-colors">Untouchable Empire</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-black uppercase tracking-[0.2em] text-[#d4af37]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs font-heading font-bold">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a href="tel:+32492327851" className="hover:text-[#d4af37] transition-colors">
                  +32 492 32 78 51
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={ARTIST_DATA.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Support (+32 492 32 78 51)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a href="mailto:booking@untouchableempire.com" className="hover:text-[#d4af37] transition-colors">
                  booking@untouchableempire.com
                </a>
              </li>
              <li className="text-[11px] text-gray-400 pt-1">
                Antwerp, Belgium 🇧🇪 & Freetown, Sierra Leone 🇸🇱
              </li>
            </ul>
          </div>

          {/* YouTube Channel Promo */}
          <div className="space-y-3">
            <h4 className="text-xs font-heading font-black uppercase tracking-[0.2em] text-red-500">
              YouTube Channel
            </h4>
            <p className="text-xs text-gray-400 leading-normal">
              Subscribe to stream every song directly from the official verified channel.
            </p>
            <a
              href={ARTIST_DATA.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-widest shadow-md transition-colors"
            >
              @slimdviper6752
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} SLIM D’VIPER — Untouchable Empire Records. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-heading font-bold uppercase">The Money Man • Antwerp, Belgium</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-black transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
