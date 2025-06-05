import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom CSS file
import "./testimonials-slides-show.css";

import Box from "@mui/material/Box";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TestimonialsButton from "../../molecules/testimonials-button";
import { TestimonialsCard } from "../../molecules/testimonials-card";
import { SingleTestimonialType } from "features/landing-page/types";

export default function TestimonialSlider() {
  const testimonials: SingleTestimonialType[] = [
    {
      id: "testimonial1",
      text: "I was considering opening a store on Amazon in Saudi Arabia but faced several issues regarding account setup. Your company provided me with the perfect solution.",
    },
    {
      id: "testimonial2",
      text: "May God bless you, and thank you for all the support and facilitation you’ve provided us.",
    },
    {
      id: "testimonial3",
      text: "Thank you for the quick response and communication. I’m excited to start working with you as a seller.",
    },
    {
      id: "testimonial4",
      text: "Thank you for the guidance, direction, and efforts you’ve offered.",
    },
    {
      id: "testimonial5",
      text: "Thank you, an excellent company. Hopefully, we’ll have more collaborations in the future.",
    },
  ];
  return (
    <Box className="testimonial-slider-container">
      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
          scale: 0.8,
        }}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={0}
        grabCursor={true}
        loop={false}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="testimonial-swiper"
      >
        <TestimonialsButton className="swiper-button-prev" buttonSide="right">
          <ArrowBackIosNewIcon fontSize="small" />
        </TestimonialsButton>

        {testimonials.map((item) => (
          <SwiperSlide key={item.id} className="testimonial-slide">
            <TestimonialsCard text={item.text} />
          </SwiperSlide>
        ))}
        <TestimonialsButton className="swiper-button-next" buttonSide="left">
          <ArrowForwardIosIcon fontSize="small" />
        </TestimonialsButton>
      </Swiper>
    </Box>
  );
}
