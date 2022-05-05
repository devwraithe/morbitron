import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Section from "../../components/section";
import SmallCard from "../../components/smallCard";
import SmallVideoCard from "../../components/smallCard/video";
import SRow from "../../components/sRow";
import "./index.scss";

const Film = () => {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const movieReqs = {
    movieVideos: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=af233f03d0ac4520aa6ac7eeec7339ca&language=en-US`,
    movieCredits: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=af233f03d0ac4520aa6ac7eeec7339ca&language=en-US`,
    movieSummary: `https://api.themoviedb.org/3/movie/${id}?api_key=af233f03d0ac4520aa6ac7eeec7339ca&language=en-US`,
  };

  const fetchVideos = () => {
    axios
      .get(movieReqs.movieVideos)
      .then((res) => {
        console.log(res.data.results);
        setVideos(res.data.results);
      })
      .catch((err) => console.log(err));
  };

  const fetchCredits = () => {
    axios
      .get(movieReqs.movieCredits)
      .then((res) => {
        setCredits(res.data.cast);
      })
      .catch((err) => console.log(err));
  };

  const fetchMovie = () => {
    axios
      .get(movieReqs.movieSummary)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchVideos();
    fetchCredits();
    fetchMovie();
  }, []);

  return (
    <>
      <div className="film">
        <div className="wrapper">
          <Header movie={movie} />
          <main className="main py-16" role="main">
            <div className="section">
              <h1 className="section__heading">ABOUT {movie.title}</h1>
              <p className="section__desc mt-5">{movie.overview}</p>
            </div>
            <div className="section px-20 mt-14">
              <h1 className="section__heading">MORE INFORMATION</h1>
              <p className="section__genres mt-2">
                <b>Cast: </b>
                {credits.map((cast) => (
                  <span>{cast.name}, </span>
                ))}
              </p>
            </div>
            <div className="section videos mt-14" id="videos">
              <h1 className="section__heading">{movie.title} VIDEOS</h1>
              <div className="section__videos">
                {videos.map((video) => (
                  <SmallVideoCard video={video} />
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Film;
