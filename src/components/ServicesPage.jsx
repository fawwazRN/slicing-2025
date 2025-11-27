import { services } from "./Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

export default function ServicesPage() {
  return (
    <section className="bg-[#F9F9FF] py-11.5 w-full font-inter">
      <div className="flex justify-center items-center w-full">
        <h2 className="pb-18 font-bold text-4xl">Services we offer</h2>
      </div>
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{ 640: { slidesPerView: 3 } }}
          className="px-4 pt-10 pb-14">
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              {({ isActive }) => (
                <div
                  className={`rounded-[7px] p-0.5 transition-all duration-300 ease-in-out max-sm:w-full max-sm:m-auto ${
                    isActive
                      ? "bg-linear-to-bl from-[#F76680] to-[#57007B] translate-y-10"
                      : "bg-transparent shadow"
                  }`}>
                  <div
                    className={`
                    flex flex-col justify-center items-start text-left 
                      bg-white rounded-md px-4 py-9 h-max  w-full
                      transition-all duration-300 ease-in-out
                    `}>
                    {/* Icon Wrapper */}
                    <div
                      className={`rounded-full p-0.5 bg-linear-to-bl from-[#F76680] to-[#57007B] mb-3.75`}>
                      <div
                        className={`
                        bg-white size-14.5 flex justify-center items-center rounded-full`}>
                        <img src={service.img} alt="" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        text-xl mb-5 font-semibold transition-all duration-300 ease-in-out
                        ${
                          isActive
                            ? "bg-linear-to-bl from-[#F76680] to-[#57007B] bg-clip-text text-transparent"
                            : "text-[#2D3748]"
                        }
                      `}>
                      {service.judul}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.deskripsi}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
