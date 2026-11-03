"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Youtube, ExternalLink, Sparkles, Radio, FileText, X } from "lucide-react";
import { ARTIST_DATA, Track } from "@/data/artist-data";

interface MusicSectionProps {
  onPlaySongOnYoutube?: (title: string, url: string, videoId?: string) => void;
}

export default function MusicSection({ onPlaySongOnYoutube }: MusicSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedLyricsTrack, setSelectedLyricsTrack] = useState<Track | null>(null);

  const filters = [
    { id: "all", label: "All Releases" },
    { id: "featured", label: "Featured Anthems" },
    { id: "hiphop", label: "Afro-Hip-Hop" },
    { id: "cultural", label: "Cultural / Roots" },
  ];

  const filteredTracks = ARTIST_DATA.tracks.filter((track) => {
    if (activeFilter === "featured") return track.featured;
    if (activeFilter === "hiphop") return track.genre.includes("Hip-Hop") || track.genre.includes("Trap");
    if (activeFilter === "cultural") return track.genre.includes("Folk") || track.genre.includes("Salone") || track.genre.includes("Traditional");
    return true;
  });

  const featuredTrack = ARTIST_DATA.tracks[0]; // I'M ALIVE

  const handlePlayDirect = (track: Track) => {
    if (onPlaySongOnYoutube) {
      onPlaySongOnYoutube(track.title, track.youtubeUrl, track.youtubeId);
    } else {
      window.open(track.youtubeUrl, "_blank");
    }
  };

  return (
    <section id="music" className="py-20 sm:py-28 relative bg-[#f8f9fa] border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-600 text-white text-xs font-heading font-black uppercase tracking-[0.25em]">
            <Youtube className="w-3.5 h-3.5 fill-white" />
            <span>Every Song Plays Direct on YouTube</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-black uppercase tracking-tight">
            Official <span className="text-gold-gradient">Discography</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Stream official releases and music videos directly on YouTube: <strong>@slimdviper6752</strong>
          </p>
          <div className="w-24 h-1.5 bg-[#d4af37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Song Spotlight: I'M ALIVE (Front Release) */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl light-card border-2 border-gray-300 bg-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Artwork */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-black group">
                <Image
                  src={featuredTrack.coverUrl}
                  alt={featuredTrack.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black text-[#d4af37] text-[10px] font-heading font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  ★ OFFICIAL RELEASE
                </div>
              </div>
            </div>

            {/* Song Meta & YouTube Live Play Trigger */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-heading font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-red-600" /> Untouchable Empire Label Presents
              </div>

              <div className="space-y-1">
                <h3 className="text-3xl sm:text-5xl font-heading font-black text-black uppercase tracking-tight">
                  {featuredTrack.title}
                </h3>
                <p className="text-sm sm:text-base font-heading font-bold text-[#b8860b] uppercase">
                  {featuredTrack.subtitle}
                </p>
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl">
                The breakout survival anthem celebrating life, perseverance, and African pride from Sierra Leone to Antwerp, Belgium. Click below to stream the video live on YouTube!
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => handlePlayDirect(featuredTrack)}
                  className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg flex items-center gap-2.5"
                >
                  <Youtube className="w-5 h-5 fill-white" />
                  <span>Play "{featuredTrack.title}" Live on YouTube</span>
                </button>

                <a
                  href={ARTIST_DATA.youtubeChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-black hover:bg-gray-800 text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Open Full Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-black uppercase tracking-widest transition-all ${
                activeFilter === filter.id
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-700 hover:text-black border border-gray-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Tracklist Grid with DIRECT LIVE YOUTUBE PLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="p-4 rounded-2xl light-card border border-gray-200 bg-white hover:border-[#d4af37] light-card-hover flex items-center justify-between gap-4"
            >
              {/* Left: Thumbnail & Song Name */}
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200 shadow-sm">
                  <Image
                    src={track.coverUrl}
                    alt={track.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-base text-black truncate uppercase">
                      {track.title}
                    </span>
                    {track.featured && (
                      <span className="text-[9px] font-heading font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">
                        YouTube Hit
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {track.subtitle}
                  </div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-heading font-bold pt-0.5">
                    {track.genre} • {track.releaseYear}
                  </div>
                </div>
              </div>

              {/* Right: Direct YouTube Play Button */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {track.lyricsSnippet && (
                  <button
                    onClick={() => setSelectedLyricsTrack(track)}
                    className="p-2 rounded-lg text-gray-400 hover:text-black hover:bg-gray-100 transition-colors"
                    title="View Lyrics"
                    aria-label="View Lyrics"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={() => handlePlayDirect(track)}
                  className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                  title="Play live on YouTube"
                >
                  <Youtube className="w-3.5 h-3.5 fill-white" />
                  <span>Play YouTube</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global YouTube Channel Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-[#d4af37] flex-shrink-0">
              <Image src="/images/slim-d-viper-logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider">
                Subscribe to SLIM D’VIPER on YouTube
              </div>
              <p className="text-xs text-gray-300">
                Stream every song directly from the official verified channel @slimdviper6752.
              </p>
            </div>
          </div>

          <a
            href={ARTIST_DATA.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-black text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-md flex-shrink-0"
          >
            <Youtube className="w-4 h-4 fill-white" />
            <span>Open YouTube Channel</span>
          </a>
        </div>

      </div>

      {/* Lyrics Modal */}
      {selectedLyricsTrack && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl relative border border-gray-300">
            <button
              onClick={() => setSelectedLyricsTrack(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black p-2 font-bold"
              aria-label="Close Lyrics Modal"
            >
              ✕
            </button>
            <div className="text-[10px] font-heading font-black uppercase tracking-widest text-[#b8860b]">
              Lyrics Spotlight
            </div>
            <h4 className="text-2xl font-heading font-black text-black uppercase">
              {selectedLyricsTrack.title}
            </h4>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium italic text-gray-800 leading-relaxed">
              "{selectedLyricsTrack.lyricsSnippet}"
            </div>
            <div className="pt-2 flex justify-between items-center text-xs">
              <span className="text-gray-400 font-heading font-bold uppercase">Untouchable Empire</span>
              <button
                onClick={() => {
                  handlePlayDirect(selectedLyricsTrack);
                  setSelectedLyricsTrack(null);
                }}
                className="px-4 py-2 rounded-xl bg-red-600 text-white font-heading font-black uppercase tracking-wider text-[11px]"
              >
                Play on YouTube
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
