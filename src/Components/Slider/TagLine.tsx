
function Tagline() {
  return (
    <div
      className="tagline absolute z-[10] top-0 left-0 w-full h-screen font-light text-white text-[1.75rem] lg:text-4xl xl:text-5xl flex items-center justify-center opacity-100"
      style={{
        transition: "2s ease-out",
      }}
    >
      <div className="max-w-[27ch] text-center">
      Evolving the drive with <span className="font-bold">360-degree </span> comprehensive solutions
      </div>
    </div>
  );
}

export default Tagline;
