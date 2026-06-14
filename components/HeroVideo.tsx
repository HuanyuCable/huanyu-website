"use client";

import { useEffect, useRef, useState } from "react";

const base = (process.env.NEXT_PUBLIC_R2_BASE_URL || "").replace(/\/$/, "");
const desktop = process.env.NEXT_PUBLIC_HERO_VIDEO_DESKTOP || (base ? `${base}/video/huanyu-factory-desktop.mp4` : "");
const mobile = process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE || (base ? `${base}/video/huanyu-factory-mobile.mp4` : desktop);
const poster = process.env.NEXT_PUBLIC_HERO_POSTER || (base ? `${base}/video/huanyu-factory-poster.webp` : "/images/factory-poster.svg");

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setPaused(true));
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPaused(false)).catch(() => setPaused(true));
    } else {
      video.pause();
      setPaused(true);
    }
  }

  if (!desktop || failed) {
    return <div className="hero-media hero-fallback" style={{ backgroundImage: `url(${poster})` }} />;
  }

  return (
    <div className="hero-media">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onError={() => setFailed(true)}
        aria-label="Huanyu Cable factory production view"
      >
        <source src={mobile} media="(max-width: 720px)" type="video/mp4" />
        <source src={desktop} type="video/mp4" />
      </video>
      <button className="video-control" type="button" onClick={togglePlayback} aria-label={paused ? "Play background video" : "Pause background video"}>
        {paused ? "Play" : "Pause"}
      </button>
    </div>
  );
}
