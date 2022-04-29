import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import SmallCard from "../../components/smallCard";
import "./index.scss";

const ViewTv = ({ props }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const fetchMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=af233f03d0ac4520aa6ac7eeec7339ca&language=en-US`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="viewTv">
        <div className="wrapper">
          <header
            className="header"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${data.poster_path}')`,
            }}
          >
            <div className="header__wrapper">
              <nav className="nav flex flex-row justify-between px-14">
                <div className="nav__brand">morbitron</div>
                <div className="nav__links">
                  <a href="github" className="nav__anchor">
                    view repo
                  </a>
                </div>
              </nav>
              <div className="header__content">
                <div>
                  <div className="header__title">{data.name}</div>
                  <div className="header__summary my-4">{data.overview}</div>
                  <div className="header__info">
                    {data.runtime} Minutes
                    <span className="mx-2">&bull;</span>
                    {data.status}
                    <span className="mx-2">&bull;</span>
                    {data.popularity} Popularity
                    <span className="mx-2">&bull;</span>
                    <span style={{ textTransform: "uppercase" }}>
                      {data.original_language}
                    </span>
                    <span className="mx-2">&bull;</span>
                    {data.vote_count} Votes
                  </div>
                  <div className="header__btns mt-8">
                    <button className="header__btn mr-4">
                      Watch The Trailer
                    </button>
                    <button className="header__btn secondary">
                      More Information
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="main py-16" role="main">
            <div className="about px-20">
              <h1 className="about__heading">ABOUT THIS MOVIE</h1>
              <h1 className="about__title mt-4">{data.title}</h1>
              <p className="about__desc mt-2">{data.overview}</p>
            </div>
            <div className="about px-20 mt-14">
              <h1 className="about__heading">MORE DETAILS</h1>
              <p className="about__genres mt-5">
                <b>Genres: </b>
                PG 13, Sci-Fi Movies, Family Movies, Action & Adventure,
                Children & Family Movies, Comedies
              </p>
              <p className="about__genres mt-2">
                <b>Starring: </b>
                Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian
                Tyree Henry, Shun Oguri
              </p>
              <p className="about__genres mt-2">
                <b>Cast: </b>
                Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall, Brian
                Tyree Henry, Shun Oguri
              </p>
              <p className="about__genres mt-2">
                <b>Director: </b>
                Adam Wingard
              </p>
              <p className="about__genres mt-2">
                <b>Audio: </b>
                Arabic (Syria), English - Audio Description, English [Original]
              </p>
            </div>
            <div className="column mt-14">
              <h1 className="column__title px-20">
                VIDEOS FROM THE ADAM PROJECT
              </h1>
              {/* <div className="column__content">
                <div className="column__season mt-5">
                  <div className="column__seasonContent mt-4 flex">
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                  </div>
                </div>
              </div> */}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ViewTv;
