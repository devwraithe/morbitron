import React from "react";
import "./index.scss";

const Header = ({ movie }) => {
  return (
    <>
      <header
        className="header"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
        }}
      >
        <div className="header__wrapper">
          <div className="header__content">
            <div>
              <div className="header__title">{movie.title}</div>
              <div className="header__summary my-4">{movie.overview}</div>
              <div className="header__info">
                {movie.runtime} Minutes
                <span className="mx-2">&bull;</span>
                {movie.status}
                <span className="mx-2">&bull;</span>
                {movie.popularity} Popularity
                <span className="mx-2">&bull;</span>
                <span style={{ textTransform: "uppercase" }}>
                  {movie.original_language}
                </span>
                <span className="mx-2">&bull;</span>
                {movie.vote_count} Votes
              </div>
              <div className="header__btns mt-8">
                <button className="header__btn mr-4">Watch The Trailer</button>
                <button className="header__btn secondary">
                  More Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
