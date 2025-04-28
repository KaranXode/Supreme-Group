"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/swiper-bundle.css"
import "./slider.css";

import CompleteBody from "../../assets/videos/Complete-body.mp4";
import CommercialBody from "../../assets/videos/CommercialAlpha.mp4";

import completeBodyIcon from "../../assets/icons/completeBodyIcon.svg";
import frontBodyIcon from "../../assets/icons/frontBodyIcon.svg";
import truckIcon from "../../assets/icons/truckIcon.svg";
import exteriorIcon from "../../assets/icons/exteriorIcon.svg";
import SlideContent from "./SliderContent";
import Tagline from "./TagLine";

const slides = [
  {
    heading: "Passenger vehicles",
    subtext: "Revving up innovation from interior to exterior.",
    videoSrc: CompleteBody,
    icons: [
      completeBodyIcon,
      frontBodyIcon,
      completeBodyIcon,
      truckIcon,
      exteriorIcon,
    ],
  },
  {
    heading: "Commercial vehicles",
    subtext: "Advancing engineering for heavy-duty vehicles.",
    videoSrc: CommercialBody,
    icons: [completeBodyIcon, truckIcon, exteriorIcon],
  },
];

const interleaveOffset = 0.75;

export default function VerticalSwiper() {
  const swiperRef = useRef<any>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [showSlider, setShowSlider] = useState(false);
  const [progress, setProgress] = useState<number[]>(slides.map(() => 220));
  const [isPlaying, setIsPlaying] = useState<boolean[]>(slides.map(() => true));

  useEffect(() => {
    const taglineTimeout = setTimeout(() => {
      gsap.to(".tagline", {
        opacity: 1,
        y: "-85vh",
        duration: 1,
        bottom: 0,
        height: "auto",
        top: "unset",
        ease: "power1.in",
        onComplete: () => {
          gsap.delayedCall(2, () => {
            setShowSlider(true);
            gsap.to(".swiper-container", {
              opacity: 1,
              duration: 2,
              ease: "power1.inOut",
            });
          });
        },
      });
    }, 3000);

    return () => clearTimeout(taglineTimeout);
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    swiper.on("progress", function () {
      for (let i = 0; i < swiper.slides.length; i++) {
        const slideProgress = swiper.slides[i].progress;
        const innerOffset = swiper.height * interleaveOffset;
        const innerTranslate = slideProgress * innerOffset;

        const inner = swiper.slides[i].querySelector(".slide-inner");
        if (inner) {
          gsap.set(inner, {
            y: innerTranslate,
          });
        }
      }
    });

    swiper.on("setTransition", function (speed: number) {
      for (let i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = `${speed}ms`;
        const inner = swiper.slides[i].querySelector(
          ".slide-inner"
        ) as HTMLElement;
        if (inner) {
          inner.style.transition = `${speed}ms`;
        }
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress.map((offset, idx) => {
          const video = videoRefs.current[idx];
          if (video && !video.paused) {
            const duration = video.duration || 1;
            const currentTime = video.currentTime;
            const progressPercent = currentTime / duration;
            return 220 - progressPercent * 220;
          }
          return offset;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const togglePlayPause = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        updateIsPlaying(index, true);
      } else {
        video.pause();
        updateIsPlaying(index, false);
      }
    }
  };

  const updateIsPlaying = (index: number, playing: boolean) => {
    setIsPlaying((prev) => {
      const newState = [...prev];
      newState[index] = playing;
      return newState;
    });
  };

  return (
    <div className=" bg-black hidden md:block">
      <div className="vertical-swiper-wrapper relative bg-black container mx-auto">
        <Tagline />

        {showSlider && (
          <Swiper
            direction="vertical"
            speed={6000}
            mousewheel={{
              releaseOnEdges: true,
            }}
            modules={[Mousewheel, Pagination]}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
              renderBullet: (index, className) => {
                const { heading, subtext } = slides[index];
                return `
                <span class="${className} relative flex flex-col items-start mb-8 cursor-pointer">
                  <span class="absolute left-[60px] min-w-[260px] top-[20px]">
                    <span class="text-2xl font-medium text-left pb-2">${heading}</span>
                    <span class="font-light text-left text-lg">${subtext}</span>
                  </span>
                </span>
              `;
              },
            }}
            watchSlidesProgress
            ref={swiperRef}
            className="swiper-container"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <SlideContent
                  idx={idx}
                  slide={slide}
                  progress={progress}
                  isPlaying={isPlaying}
                  togglePlayPause={togglePlayPause}
                  videoRefs={videoRefs}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="desktopView-pagination swiper-pagination absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center" />
      </div>
    </div>
  );
}
