"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type ProjectReference = {
  name: string;
  location: string;
};

type ProjectReferenceCarouselProps = {
  references: readonly ProjectReference[];
  sectorTitle: string;
};

export function ProjectReferenceCarousel({ references, sectorTitle }: ProjectReferenceCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(references.length > 1);
  const [carouselStatus, setCarouselStatus] = useState({
    firstVisible: 1,
    lastVisible: 1,
    progress: 0,
    visibleCount: 1,
  });

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    const firstCard = track.querySelector<HTMLElement>(".project-reference-card");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstCard ? firstCard.offsetWidth + gap : track.clientWidth;
    const visibleCount = firstCard
      ? Math.max(1, Math.min(references.length, Math.round((track.clientWidth + gap) / step)))
      : 1;
    const isAtEnd = track.scrollLeft >= maxScrollLeft - 2;
    const maximumStartIndex = Math.max(0, references.length - visibleCount);
    const estimatedStartIndex = step > 0 ? Math.round(track.scrollLeft / step) : 0;
    const startIndex = isAtEnd
      ? maximumStartIndex
      : Math.min(maximumStartIndex, Math.max(0, estimatedStartIndex));

    setCanGoPrevious(track.scrollLeft > 2);
    setCanGoNext(track.scrollLeft < maxScrollLeft - 2);
    setCarouselStatus({
      firstVisible: startIndex + 1,
      lastVisible: Math.min(references.length, startIndex + visibleCount),
      progress: maxScrollLeft > 0 ? Math.min(100, (track.scrollLeft / maxScrollLeft) * 100) : 100,
      visibleCount,
    });
  }, [references.length]);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".project-reference-card");

    if (!track || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const distance = firstCard.offsetWidth + gap;
    const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
    const destination = Math.min(maxScrollLeft, Math.max(0, track.scrollLeft + distance * direction));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    track.scrollTo({
      left: destination,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateControls();
    track.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      track.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  const progressSize = Math.max(18, Math.min(100, (carouselStatus.visibleCount / references.length) * 100));
  const progressOffset = (carouselStatus.progress / 100) * (100 - progressSize);

  return (
    <div className="project-reference-carousel">
      <div className="project-carousel-toolbar">
        <span className="project-carousel-frame-mark" aria-hidden="true" />
        <div className="carousel-controls project-carousel-controls" aria-label={`${sectorTitle} carousel controls`}>
          <button
            type="button"
            aria-label={`Previous ${sectorTitle} reference`}
            disabled={!canGoPrevious}
            onClick={() => scrollByCard(-1)}
          >
            &lsaquo;
          </button>
          <button
            type="button"
            aria-label={`Next ${sectorTitle} reference`}
            disabled={!canGoNext}
            onClick={() => scrollByCard(1)}
          >
            &rsaquo;
          </button>
        </div>
      </div>

      <div
        className="project-reference-track"
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${sectorTitle} historical supply references`}
        tabIndex={0}
      >
        {references.map((reference, index) => (
          <article className="project-reference-card" key={reference.name}>
            <div className="project-reference-card-top" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
            </div>
            <h3>{reference.name}</h3>
            <p>{reference.location}</p>
            <small>Project Reference</small>
          </article>
        ))}
      </div>

      <div className="project-carousel-status">
        <div
          className="project-carousel-progress"
          role="progressbar"
          aria-label={`${sectorTitle} browsing progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(carouselStatus.progress)}
          aria-valuetext={`References ${carouselStatus.firstVisible} to ${carouselStatus.lastVisible} of ${references.length}`}
        >
          <span style={{ width: `${progressSize}%`, left: `${progressOffset}%` }} />
        </div>
        <span className="project-carousel-page" aria-live="polite">
          {String(carouselStatus.firstVisible).padStart(2, "0")}
          {carouselStatus.visibleCount > 1 && `–${String(carouselStatus.lastVisible).padStart(2, "0")}`}
          <i aria-hidden="true">/</i>
          {String(references.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
