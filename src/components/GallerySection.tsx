"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ARTIST_DATA, GalleryItem } from "@/data/artist-data";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Portrait", "Stage", "Studio", "Empire", "Tour"];

  const filteredItems = ARTIST_DATA.gallery.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  const openLightbox = (item: GalleryItem) => {
    const idx = ARTIST_DATA.gallery.findIndex((g) => g.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % ARTIST_DATA.gallery.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + ARTIST_DATA.gallery.length) % ARTIST_DATA.gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-[#f8f9fa] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black text-[#d4af37] text-xs font-heading font-black uppercase tracking-[0.25em]">
            <Camera className="w-3.5 h-3.5" />
            <span>Official Photo Archive</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
            Visual Archive & <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            High-definition portraits, artwork, live stages, and life in Antwerp, Belgium.
          </p>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-black uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-700 hover:text-black border border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid featuring ALL 8 images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className={`group relative rounded-3xl overflow-hidden light-card border-2 border-gray-200 hover:border-black transition-all duration-300 cursor-pointer shadow-md bg-white ${
                item.featured ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-black text-[10px] font-heading font-black uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>{item.category}</span>
              </div>

              {/* Zoom Trigger */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 space-y-1 text-white">
                <h4 className="font-heading font-black text-base sm:text-lg uppercase">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-200 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center font-bold text-lg transition-colors z-20"
            aria-label="Close Lightbox"
          >
            ✕
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <div className="relative w-full aspect-[4/3] max-h-[65vh] rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-black">
              <Image
                src={ARTIST_DATA.gallery[lightboxIndex].src}
                alt={ARTIST_DATA.gallery[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="mt-4 text-center max-w-xl space-y-1 text-white">
              <span className="text-[10px] font-heading font-black uppercase tracking-widest text-[#d4af37]">
                {ARTIST_DATA.gallery[lightboxIndex].category} • {lightboxIndex + 1} of {ARTIST_DATA.gallery.length}
              </span>
              <h4 className="text-xl font-heading font-black uppercase">
                {ARTIST_DATA.gallery[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-300">
                {ARTIST_DATA.gallery[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
