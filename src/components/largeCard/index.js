import React from "react";
import "./index.scss";

const LargeCard = ({ movie }) => {
  return (
    <>
      <div
        className="largeCard"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
        }}
      >
        <div className="largeCard__wrapper">
          <div className="largeCard__content pb-8 px-6">
            <div className="largeCard__note">
              {movie.original_language}
              <span className="mx-2">&bull;</span>
              {movie.vote_count} VOTES
            </div>
            <div className="largeCard__title">{movie.title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeCard;
