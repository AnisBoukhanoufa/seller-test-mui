import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./image-gallery.scss";
const ImagesGallery = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imagesToUse =
    images?.filter((image) => !image?.startsWith("NOT_FOUND")) || [];

  return (
    <div >
      {/* Main Swiper */}
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        className="mainSwiper"
      >
        {imagesToUse.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbSwiper"
      >
        {imagesToUse.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImagesGallery;
