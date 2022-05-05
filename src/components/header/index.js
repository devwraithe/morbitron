import { data } from "autoprefixer";
import React from "react";
import Navbar from "../navbar";
import "./index.scss";

const Header = ({ movie }) => {
  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        }}
      >
        <div className="header__wrapper">
          <Navbar />
          <div className="header__main">
            <div className="header__img">
              {/* <img
                src={`url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`}
                alt=""
              /> */}
            </div>
            <div className="header__content">
              <h1 className="header__title">{movie.title}</h1>
              <div className="header__tags mt-2">
                {movie.original_language}
                <span className="mx-3">&bull;</span>
                {movie.runtime} Minutes<span className="mx-3">&bull;</span>
                {movie.popularity} Popularity
                <span className="mx-3">&bull;</span>
                {movie.vote_count} Votes
              </div>
              <div className="header__btns my-8 mb-9">
                <a href="#videos">
                  <button className="header__btn mr-4">
                    Watch Video Clips
                  </button>
                </a>
              </div>
              <div className="header__caption mb-4">"{movie.tagline}"</div>
              {/* <div className="header__overview">{movie.overview}</div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
