"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import VideosSection from "@/components/VideosSection";
import JourneySection from "@/components/JourneySection";
import EmpireSection from "@/components/EmpireSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { ARTIST_DATA, Track } from "@/data/artist-data";
import { Youtube, ExternalLink, X } from "lucide-react";

export default function HomePage() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeModalSong, setYoutubeModalSong] = useState<{ title: string; url: string; videoId?: string } | null>(null);

  const currentTrack = ARTIST_DATA.tracks[currentTrackIndex] || ARTIST_DATA.tracks[0];

  const handlePlaySongOnYoutube = (title: string, url: string, videoId?: string) => {
    setYoutubeModalSong({ title, url, videoId: videoId || "Q4Udl2Fejzw" });
  };

  const handleTogglePlay = () => {
    handlePlaySongOnYoutube(currentTrack.title, currentTrack.youtubeUrl, currentTrack.youtubeId);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % ARTIST_DATA.tracks.length);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + ARTIST_DATA.tracks.length) % ARTIST_DATA.tracks.length);
  };

  return (
    <div className="relative min-h-screen bg-[#fbfbfd] text-[#09090b] flex flex-col font-sans">
      {/* Top Navigation with Official Logo */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section with Front Image Showcase & Live YouTube Play */}
        <Hero onPlaySongOnYoutube={handlePlaySongOnYoutube} />

        {/* Personal Details & Official Biography */}
        <AboutSection />

        {/* Music Discography - Every Song Plays Direct from YouTube */}
        <MusicSection onPlaySongOnYoutube={handlePlaySongOnYoutube} />

        {/* Cinematic Music Videos */}
        <VideosSection />

        {/* Transatlantic Journey: Koidu -> Kingtom -> Antwerp, Belgium -> Global */}
        <JourneySection />

        {/* Untouchable Empire Record Label & Roster */}
        <EmpireSection />

        {/* Visual Archive Gallery with Official Logo & Artwork */}
        <GallerySection />

        {/* Contact & Booking Hub (No Booking Form - All Direct) */}
        <ContactSection />
      </main>

      {/* Limkokwing-style High Contrast Footer */}
      <Footer />

      {/* Fixed WhatsApp Quick Contact Button (Fixed Safe Bottom-Right Docking) */}
      <WhatsAppFloatingButton />

      {/* Global Audio Bar with Direct Live YouTube Links */}
      <GlobalAudioPlayer
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNextTrack={handleNextTrack}
        onPrevTrack={handlePrevTrack}
        onPlaySongOnYoutube={handlePlaySongOnYoutube}
      />

      {/* Interactive LIVE YouTube Player Modal (Plays Real Video on Site) */}
      {youtubeModalSong && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6">
          <div className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative border-2 border-black flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-black text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
                  <Youtube className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <div className="text-[10px] font-heading font-black uppercase tracking-widest text-[#d4af37]">
                    Live YouTube Stream
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-black uppercase">
                    {youtubeModalSong.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setYoutubeModalSong(null)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center font-bold transition-colors"
                aria-label="Close Live Player"
              >
                ✕
              </button>
            </div>

            {/* Embedded Live YouTube Iframe */}
            <div className="relative aspect-video bg-black w-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${youtubeModalSong.videoId || "Q4Udl2Fejzw"}?autoplay=1&enablejsapi=1&rel=0`}
                title={`SLIM D’VIPER - ${youtubeModalSong.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-black uppercase">SLIM D’VIPER</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-medium">Untouchable Empire Records (Antwerp, Belgium 🇧🇪)</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={youtubeModalSong.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-black text-xs uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Youtube className="w-3.5 h-3.5 fill-white" />
                  <span>Open on YouTube App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setYoutubeModalSong(null)}
                  className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-black font-heading font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
