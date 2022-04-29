import React from "react";
import "./index.scss";

const SmallCard = ({ movie }) => {
  return (
    <>
      <div className="smallCard">
        <div className="smallCard__wrapper">
          <div className="smallCard__image">
            <img
              src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
              alt={movie.path}
              className="smallCard__imgSrc"
            />
          </div>
          <div className="smallCard__content">
            <div className="smallCard__title mt-4">{movie.title}</div>
            <div className="smallCard__tags mt-1">
              {movie.original_language}
              <span className="mx-2">&bull;</span>
              {movie.vote_count} VOTES
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCard;
