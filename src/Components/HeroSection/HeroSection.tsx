import HeroVideo from "../../assets/videos/automotiveVideo.mp4";

export default function HeroSection() {
  return (
    <div>
      <section className="relative lg:h-screen min-h-[450px] overflow-hidden bg-blueDark">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster=""
            className="h-full w-full object-cover object-center"
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
          <span className=" font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
            Driven by performance
          </span>
          <h2 className=" text-white font-light leading-tight pb-2 text-[1.75rem] md:text-[2.25rem] 2xl:text-[3rem]">
            <span className="font-semibold">
              Soft trims and{" "}
              <span className="text-primary-700">NVH solutions</span>
            </span>
            <br className="hidden md:block" /> for seamless rides
          </h2>
        </div>
      </section>
    </div>
  );
}
