"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Youtube, ExternalLink, Film, Eye, X } from "lucide-react";
import { ARTIST_DATA, Video } from "@/data/artist-data";

export default function VideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section id="videos" className="py-20 sm:py-28 relative bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-600 text-white text-xs font-heading font-black uppercase tracking-[0.25em]">
              <Film className="w-3.5 h-3.5" />
              <span>Cinematic Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
              Music Videos & <span className="text-gold-gradient">Visualizers</span>
            </h2>
            <p className="text-gray-600 text-base">
              Stream official visuals shot between Antwerp, Belgium and Freetown, Sierra Leone directly on YouTube.
            </p>
          </div>

          <a
            href={ARTIST_DATA.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs tracking-widest uppercase transition-all shadow-md self-start md:self-auto"
          >
            <Youtube className="w-4 h-4 fill-white" />
            <span>YouTube: @slimdviper6752</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>

        {/* Featured Video Blockbuster Card */}
        {ARTIST_DATA.videos[0] && (
          <div className="mb-12 relative rounded-3xl overflow-hidden light-card border-2 border-gray-200 shadow-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Thumbnail Container */}
              <div
                className="lg:col-span-7 relative aspect-video cursor-pointer"
                onClick={() => setSelectedVideo(ARTIST_DATA.videos[0])}
              >
                <Image
                  src={ARTIST_DATA.videos[0].thumbnail}
                  alt={ARTIST_DATA.videos[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 text-white text-[10px] font-heading font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Featured Premiere</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-gray-500 font-heading font-bold">
                  <span className="uppercase tracking-widest text-red-600">
                    {ARTIST_DATA.videos[0].category}
                  </span>
                  <span>•</span>
                  <span>{ARTIST_DATA.videos[0].year}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-black">
                    <Eye className="w-3.5 h-3.5 text-red-600" /> {ARTIST_DATA.videos[0].views}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-black text-black uppercase leading-tight">
                  {ARTIST_DATA.videos[0].title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {ARTIST_DATA.videos[0].description}
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedVideo(ARTIST_DATA.videos[0])}
                    className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Now</span>
                  </button>

                  <a
                    href={ARTIST_DATA.youtubeChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3.5 rounded-xl bg-black hover:bg-gray-800 text-white text-xs font-heading font-black uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>Open YouTube</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTIST_DATA.videos.slice(1).map((vid) => (
            <div
              key={vid.id}
              className="rounded-2xl overflow-hidden light-card border border-gray-200 hover:border-black transition-all group flex flex-col cursor-pointer bg-white"
              onClick={() => setSelectedVideo(vid)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={vid.thumbnail}
                  alt={vid.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-85 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white">
                  {vid.views}
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-heading font-black uppercase tracking-wider text-red-600">
                    {vid.category}
                  </div>
                  <h4 className="font-heading font-black text-sm text-black line-clamp-2 uppercase mt-1">
                    {vid.title}
                  </h4>
                </div>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {vid.description}
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-heading font-bold">
                  <span>{vid.year}</span>
                  <span className="text-red-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 uppercase">
                    Play Video <Play className="w-3 h-3 fill-current" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative border-2 border-black">
            <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-black text-white">
              <div>
                <span className="text-[10px] font-heading font-black uppercase tracking-widest text-[#d4af37]">
                  {selectedVideo.category}
                </span>
                <h3 className="text-base sm:text-lg font-heading font-black uppercase">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold"
                aria-label="Close Video Modal"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 text-center">
              <Image
                src={selectedVideo.thumbnail}
                alt={selectedVideo.title}
                fill
                className="object-cover opacity-40 filter blur-[1px]"
              />
              <div className="relative z-10 space-y-4 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Youtube className="w-8 h-8 fill-white" />
                </div>
                <h4 className="text-2xl font-heading font-black text-white uppercase">
                  Stream on YouTube
                </h4>
                <p className="text-sm text-gray-200">
                  Enjoy high-definition visuals, exclusive sound, and behind-the-scenes on SLIM D’VIPER’s official YouTube channel.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={selectedVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-black text-xs uppercase tracking-widest shadow-lg flex items-center gap-2"
                  >
                    <Youtube className="w-4 h-4 fill-white" />
                    <span>Watch Full Video on YouTube</span>
                  </a>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="px-5 py-3.5 rounded-xl bg-white text-black font-heading font-bold text-xs uppercase tracking-wider"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 text-xs text-gray-600 flex items-center justify-between border-t border-gray-200">
              <span className="font-heading font-bold uppercase">Untouchable Empire Releases</span>
              <span className="text-black font-heading font-black">{selectedVideo.views}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
