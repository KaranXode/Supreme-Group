import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./mobileView.css";
import CompleteBody from "../../assets/videos/Complete-body.mp4";
import CommercialBody from "../../assets/videos/CommercialAlpha.mp4";


export default function MobileViewSlider() {
  return (
    <div className="bg-black h-full  MobileViewSlider">
      <div className="text-2xl px-3 py-14 sm:text-[1.75rem] font-light text-center">
        Evolving the drive with <span className="font-bold">360-degree </span>{" "}
        comprehensive solutions
      </div>
      <div className="px-3 py-10">
        <div>
          <div className="w-full mx-auto text-center">
            <h4 className="text-xl text-primary-500 mb-2 font-semibold">
              Passenger vehicles
            </h4>
            <p className="text-white mb-2">
              Revving up innovation <br /> from interior to exterior.
            </p>
          </div>
          <div>
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              
            >
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <div>
                        <video
                          loop
                          playsInline
                          autoPlay
                          className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
                        >
                          <source src={CompleteBody} />
                        </video>
                      </div>
                      <div className="text-base text-center min-h-[5rem]">Complete body</div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
        <div>
          <div className="w-full mx-auto text-center mt-3">
            <h4 className="text-xl text-primary-500 mb-2 font-semibold">
              Commercial vehicles
            </h4>
            <p className="text-white mb-2">
              Advancing engineering
              <br />
              for heavy-duty vehicles.
            </p>
          </div>
          <div>
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <div>
                        <video
                          loop
                          playsInline
                          autoPlay
                          className="w-auto max-h-[360px] min-h-[230px] 2xl:h-[40vh] h-24"
                        >
                          <source src={CommercialBody} />
                        </video>
                      </div>
                      <div className="text-base text-center min-h-[5rem]">Complete body</div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
