"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize2, Minimize2, Disc3, Youtube, ExternalLink } from "lucide-react";
import { ARTIST_DATA, Track } from "@/data/artist-data";

interface GlobalAudioPlayerProps {
  currentTrack: Track;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onPlaySongOnYoutube?: (title: string, url: string) => void;
}

export default function GlobalAudioPlayer({
  currentTrack,
  isPlaying,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onPlaySongOnYoutube,
}: GlobalAudioPlayerProps) {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const handlePlayOnYoutube = () => {
    if (onPlaySongOnYoutube) {
      onPlaySongOnYoutube(currentTrack.title, currentTrack.youtubeUrl);
    } else {
      window.open(currentTrack.youtubeUrl, "_blank");
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsMinimized(false)}
          className="p-3.5 rounded-full bg-white border-2 border-black text-black shadow-2xl flex items-center gap-2.5 hover:scale-105 transition-all"
        >
          <Disc3 className="w-5 h-5 animate-spin-slow text-red-600" />
          <span className="text-xs font-heading font-black text-black uppercase tracking-wider pr-1">
            {currentTrack.title}
          </span>
          <Maximize2 className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t-2 border-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      {/* Top Red YouTube Progress Line */}
      <div className="w-full bg-gray-200 h-1 relative">
        <div className="h-full bg-red-600 w-3/4 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Track Information */}
          <div className="flex items-center gap-3.5 min-w-0 max-w-[280px] sm:max-w-xs">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-black flex-shrink-0 shadow-sm">
              <Image
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xs sm:text-sm text-black truncate uppercase">
                  {currentTrack.title}
                </span>
                <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-100 text-red-700 font-heading font-black">
                  YouTube
                </span>
              </div>
              <div className="text-[11px] text-gray-500 truncate">
                SLIM D’VIPER • {currentTrack.subtitle}
              </div>
            </div>
          </div>

          {/* Center: Controls & Direct YouTube Play */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={onPrevTrack}
                className="text-gray-600 hover:text-black transition-colors p-1"
                aria-label="Previous Track"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={handlePlayOnYoutube}
                className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                title="Play Directly on YouTube"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span className="font-heading font-black text-xs uppercase tracking-wider">
                  Play on YouTube
                </span>
              </button>

              <button
                onClick={onNextTrack}
                className="text-gray-600 hover:text-black transition-colors p-1"
                aria-label="Next Track"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Equalizer Indicator */}
            <div className="hidden sm:flex items-end gap-1 h-2.5">
              <span className="w-0.5 bg-red-600 rounded-full eq-bar-1" />
              <span className="w-0.5 bg-black rounded-full eq-bar-2" />
              <span className="w-0.5 bg-red-600 rounded-full eq-bar-3" />
              <span className="w-0.5 bg-black rounded-full eq-bar-4" />
            </div>
          </div>

          {/* Right: Channel Link & Minimize */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={ARTIST_DATA.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white hover:bg-gray-800 text-xs font-heading font-bold uppercase tracking-wider transition-colors"
            >
              <Youtube className="w-3.5 h-3.5 text-red-500" />
              <span>@slimdviper6752</span>
            </a>

            <button
              onClick={() => setIsMinimized(true)}
              className="p-1.5 text-gray-500 hover:text-black transition-colors"
              title="Minimize Bar"
              aria-label="Minimize Player"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
