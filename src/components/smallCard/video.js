import React from "react";
import "./index.scss";

const SmallVideoCard = ({ video }) => {
  return (
    <>
      <div className="smallCard">
        <div className="smallCard__wrapper">
          <div className="smallCard__image">
            <iframe
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              id={video.id}
              className="smallCard__video"
            ></iframe>
          </div>
          <div className="smallCard__content">
            <div className="smallCard__title mt-4">{video.name}</div>
            <div className="smallCard__tags mt-1">
              {video.type}
              <span className="mx-2">&bull;</span>
              {video.iso_639_1}, {video.iso_3166_1}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallVideoCard;
