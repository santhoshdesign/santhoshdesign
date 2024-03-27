import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/material";

const swiperImages = [
  {
    id: 0,
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/11.png",
  },
  {
    id: 1,
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/22.png",
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/33.png",
  },
];

const SwiperComponent = () => {
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1200}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {swiperImages?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Box>
              <img
                src={item?.image}
                width={900}
                height={500}
                priority={true}
                alt="swiper_images"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
