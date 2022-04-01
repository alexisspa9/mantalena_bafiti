import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'

const basePath = "/images"

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
//   const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
//     embla
//   ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    //setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    //setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div className="embla__slide" key={slide}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={`${basePath}/${slide.src}`}
                    alt={slide.alt}
                    objectFit='cover'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  );
};

export default EmblaCarousel;
