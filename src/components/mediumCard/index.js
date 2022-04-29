import React from "react";
import "./index.scss";

const MediumCard = ({ movie }) => {
  return (
    <>
      <div
        className="mediumCard"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
        }}
      >
        <div className="mediumCard__wrapper">
          <div className="mediumCard__content pb-10 px-6">
            {/* <div className="mediumCard__note font-bold">
              {movie.original_language}
              <span className="mx-2">&bull;</span>
              {movie.vote_count} VOTES
            </div>
            <div className="mediumCard__title font-bold">{movie.title}</div> */}
            {/* <div className="mediumCard__tags mt-3">
              {movie.release_date}
              <span className="mx-2">&bull;</span>
              {movie.vote_count} Votes
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MediumCard;
