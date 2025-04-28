

interface PlayPauseButtonProps {
  idx: number;
  progress: number[];
  isPlaying: boolean[];
  togglePlayPause: (index: number) => void;
}

function PlayPauseButton({
  idx,
  progress,
  isPlaying,
  togglePlayPause,
}: PlayPauseButtonProps) {
  return (
    <div
      className="relative cursor-pointer w-[10rem] h-[10rem]"
      onClick={() => togglePlayPause(idx)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          className="rotate-[-90deg]"
        >
          <circle
            cx="26"
            cy="26"
            r="21"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeDasharray="132"
            strokeDashoffset={progress[idx]}
            style={{
              transition: "stroke-dashoffset 0.2s linear",
            }}
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none text-lg">
        {isPlaying[idx] ? (
          <span>❚❚</span>
        ) : (
          <span className="opacity-100">▶</span>
        )}
      </div>
    </div>
  );
}

export default PlayPauseButton;
