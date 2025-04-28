import React from "react";
import PlayPauseButton from "./PlayButton";

interface SlideContentProps {
  idx: number;
  slide: {
    videoSrc: string;
    icons: string[];
  };
  progress: number[];
  isPlaying: boolean[];
  togglePlayPause: (index: number) => void;
  videoRefs: React.RefObject<HTMLVideoElement[]>;
}

function SlideContent({
  idx,
  slide,
  progress,
  isPlaying,
  togglePlayPause,
  videoRefs,
}: SlideContentProps) {
  return (
    <div className="slide-inner w-full h-screen relative bg-black text-white text-5xl">
      <div className="relative flex items-center justify-end">
        <div className="relative w-3/5 xl:w-auto">
          <div>
            <video
              ref={(el) => (videoRefs.current[idx] = el)}
              muted
              loop
              playsInline
              autoPlay
              className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
            >
              <source src={slide.videoSrc} />
            </video>
          </div>

          <div className="relative flex items-center gap-5 pt-16 pr-10">
            {slide.icons.map((icon, iconIdx) => (
              <span key={iconIdx}>
                <img src={icon} alt={`icon-${iconIdx}`} />
              </span>
            ))}

            <PlayPauseButton
              idx={idx}
              progress={progress}
              isPlaying={isPlaying}
              togglePlayPause={togglePlayPause}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideContent;
