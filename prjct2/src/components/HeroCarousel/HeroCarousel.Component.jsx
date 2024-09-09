import React, { useState } from "react";
import HeroSlider from "react-slick";
import { NextArrow, PreArrow } from "./Arrows.Component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      adult: false,
      backdrop_path: "/l0cJd3Oq9gquMJPbQHTOdiOAhM5.jpg",
      genre_ids: [35, 14],
      id: 453395,
      original_language: "en",
      original_title: "Barbie",
      overview:
        "Barbie suffers a crisis that leads her to question her world and her existence.",
      popularity: 856.125,
      poster_path: "/s0YjNiOwbxIfByyLBR7xl5Qrxza.jpg",
      release_date: "2023-07-21",
      title: "Barbie",
      video: false,
      vote_average: 7.4,
      vote_count: 420,
    },
    {
      adult: false,
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      genre_ids: [53],
      id: 985939,
      original_language: "en",
      original_title: "Fall",
      overview:
        "For best friends Becky and Hunter, life is all about conquering fears and pushing limits",
      popularity: 6731.327,
      poster_path: "/9f5sIJEgyUpFv0ozfA6TurG4j22.jpg",
      release_date: "2022-08-11",
      title: "Fall",
      video: false,
      vote_average: 7.4,
      vote_count: 346,
    },
  ]);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PreArrow/>,
    cssEase: "linear",
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="w-full h-96 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;