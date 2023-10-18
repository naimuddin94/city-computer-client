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
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
        spaceBetween={25}
        navigation
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-full h-full  bg-gray-200 py-10 px-20 dark:bg-gray-800 border-2"
          >
            <div className="flex flex-col md:flex-row gap-5 justify-between items-center min-h-[25rem]">
              <div className="flex-1 my-auto space-y-3">
                <h2 className="text-4xl font-bold dark:text-slate-300">
                  {item.title}
                </h2>
                <p className="text-slate-500 font-medium max-w-lg">
                  {item.short_description}
                </p>
                <h3 className="bg-yellow-400 w-fit px-5 py-2 rounded-md font-medium">Learn more</h3>
              </div>
              <div className="flex-1 flex justify-end py-8">
                <img src={item.image} alt="" className="rounded-lg" />
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
