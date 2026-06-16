"use client";

import { useEffect, useRef, useState } from "react";

const desktop = "/media/video/huanyu-factory-desktop.mp4";
const mobile = "/media/video/huanyu-factory-mobile.mp4";
const poster = "/media/video/huanyu-factory-poster.webp";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setPaused(true));
  }, [reducedMotion]);

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

  if (failed || reducedMotion) {
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
        onCanPlay={() => setLoaded(true)}
        aria-label="Huanyu Cable factory production view"
      >
        <source src={mobile} media="(max-width: 720px)" type="video/mp4" />
        <source src={desktop} type="video/mp4" />
      </video>
      {loaded && (
        <button className="video-control" type="button" onClick={togglePlayback} aria-label={paused ? "Play background video" : "Pause background video"}>
          {paused ? "Play" : "Pause"}
        </button>
      )}
    </div>
  );
}
