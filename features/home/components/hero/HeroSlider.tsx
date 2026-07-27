"use client";

import { Autoplay, EffectFade, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeroSlide } from "./HeroSlide";
import { heroSlides } from "./slides";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./hero.css";

export function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination, Keyboard]}
      loop
      speed={900}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        renderBullet(index, className) {
          return `<span class="${className}"></span>`;
        },
      }}
      className="hero-slider"
    >
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <HeroSlide slide={slide} locale="en" priority={index === 0} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
