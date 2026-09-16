"use client";

import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";

const desktop = "/media/video/huanyu-factory-desktop.mp4";
const mobile = "/media/video/huanyu-factory-mobile.mp4";
const poster = "/media/video/huanyu-factory-poster.webp";

export function HeroVideo() {
  preload(poster, {
    as: "image",
    type: "image/webp",
    fetchPriority: "high",
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const playRequestedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);
    if (!prefersReducedMotion) {
      setVideoSrc(window.matchMedia("(max-width: 720px)").matches ? mobile : desktop);
    }
  }, []);

  useEffect(() => {
    if (!videoSrc || reducedMotion || playRequestedRef.current) return;
    const video = videoRef.current;
    if (!video) return;
    playRequestedRef.current = true;
    video.play().catch(() => setPaused(true));
  }, [reducedMotion, videoSrc]);

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

  return (
    <div className="hero-media hero-fallback" style={{ backgroundImage: `url(${poster})` }}>
      <video
        ref={videoRef}
        src={videoSrc ?? undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        onError={() => setFailed(true)}
        onCanPlay={() => setLoaded(true)}
        aria-label="Huanyu Cable factory production view"
        style={{ visibility: failed || reducedMotion ? "hidden" : undefined }}
      />
      {loaded && !failed && !reducedMotion && (
        <button className="video-control" type="button" onClick={togglePlayback} aria-label={paused ? "Play background video" : "Pause background video"}>
          {paused ? "Play" : "Pause"}
        </button>
      )}
    </div>
  );
}
