import PropTypes from "prop-types";
import {
  Navigation,
  Autoplay,
  Pagination,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

const Sliders = ({ data }) => {
  return (
    <div className="col-span-3">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{ delay: 2000 }}
        slidesPerView={1}
        spaceBetween={25}
        navigation
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full h-full  bg-white py-10 px-20 dark:bg-gray-800 border-2"
          >
            <div className="flex justify-between items-center h-[70vh]">
              <div className="flex-1 my-auto space-y-3">
                <h2 className="text-4xl font-bold dark:text-slate-300">
                  {item.title}
                </h2>
                <p className="text-slate-500 font-medium max-w-lg">
                  {item.short_description}
                </p>
              </div>
              <div className="flex-1 flex justify-end">
                <img src={item.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperButtons length={images.length} /> */}
      </Swiper>
    </div>
  );
};

Sliders.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Sliders;
