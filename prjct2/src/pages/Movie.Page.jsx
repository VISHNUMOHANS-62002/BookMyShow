import React, { useEffect, useState,useContext } from 'react'
import {useParams} from 'react-router-dom'
import MovieLayoutHoc from '../layouts/Movie.layout'
import axios from 'axios';
import { MovieContext } from '../components/Context/Movie.Context';
import Slider from 'react-slick';
import{FaCcVisa,FaCcApplePay} from 'react-icons/fa'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';
import Cast from '../components/Cast/Cast.Component';


const MoviePage = (props) => {
  const {posters,title,subtitle,isDark,config}=props;
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);
  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [recommendedMovies, setRecommendedrMovies] = useState();
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(
        `/movie/${id}/credits?&api_key=2d0b6996db8e7f8c292f9be225a60113`
      );
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);
  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(
        `/movie/${id}/similar?&api_key=2d0b6996db8e7f8c292f9be225a60113`
      );
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);
  useEffect(() => {
    const requestRecommendedrMovies = async () => {
      const getRecommendedrMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedrMovies(getRecommendedrMovies.data.results);
    };
    requestRecommendedrMovies();
  }, [id]);

  const settingsCast = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 3,
          slideToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 3,
          slideToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
    <MovieHero/>
      <div className="my-12 container px-4 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
          <p>{movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-4">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">
                  Visa Stream Offers
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-4">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold text-xl">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Rupay Card* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8"><Slider {...settingsCast}>
          {cast.map((castData)=>{<Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}/>})}
          </Slider></div>
        <div className="my-8">
          <hr/>
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="RecommendedMovies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr/>
        </div>
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="BMS XCLUSIVE"
            posters={similarMovies}
            isDark={false}
          />
        </div>
        <div className="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default MovieLayoutHoc(MoviePage);