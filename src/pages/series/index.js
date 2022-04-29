import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import LargeCard from "../../components/largeCard";
import MediumCard from "../../components/mediumCard";
import axios from "axios";
import SmallCard from "../../components/smallCard";
import "./index.scss";

const Series = () => {
  const [topRated, setTopRated] = useState([]);
  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);
  const [trendingThisWeek, setTrendingThisWeek] = useState([]);
  const [trendingToday, setTrendingToday] = useState([]);

  const seriesBaseUrl = "https://api.themoviedb.org/3/tv/";
  const trendingBaseUrl = "https://api.themoviedb.org/3/trending/";
  const API_KEY = "af233f03d0ac4520aa6ac7eeec7339ca";

  const fetchTopRated = async () => {
    axios
      .get(`${seriesBaseUrl}top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setTopRated(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchLatest = async () => {
    axios
      .get(`${seriesBaseUrl}latest?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data);
        setLatest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPopular = async () => {
    axios
      .get(`${seriesBaseUrl}popular?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setPopular(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchAiringToday = async () => {
    axios
      .get(`${seriesBaseUrl}airing_today?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setAiringToday(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOnTheAir = async () => {
    axios
      .get(`${seriesBaseUrl}on_the_air?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setOnTheAir(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTrendingThisWeek = async () => {
    axios
      .get(`${trendingBaseUrl}tv/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setTrendingThisWeek(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTrendingToday = async () => {
    axios
      .get(`${trendingBaseUrl}tv/day?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setTrendingToday(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTopRated();
    fetchLatest();
    fetchPopular();
    fetchAiringToday();
    fetchOnTheAir();
    fetchTrendingThisWeek();
    fetchTrendingToday();
  }, []);

  return (
    <>
      <div className="series">
        <div className="wrapper">
          <Navbar />
          {/* header */}
          <header
            className="header"
            style={{
              backgroundImage: `url('https://image.tmdb.org/t/p/original${latest.poster_path}')`,
            }}
          >
            <div className="header__wrapper">
              <div className="header__content">
                <div>
                  <div className="header__title">{latest.name}</div>
                  <div className="header__summary my-4">{latest.overview}</div>
                  <div className="header__info">
                    {latest.runtime} Minutes
                    <span className="mx-2">&bull;</span>
                    {latest.status}
                    <span className="mx-2">&bull;</span>
                    {latest.popularity} Popularity
                    <span className="mx-2">&bull;</span>
                    <span style={{ textTransform: "uppercase" }}>
                      {latest.original_language}
                    </span>
                    <span className="mx-2">&bull;</span>
                    {latest.vote_count} Votes
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
          {/* header */}
          <main className="main pt-16" role="main">
            <section className="top">
              <h3 className="top__title">TOP RATED MOVIES</h3>
              <div className="top__cards mt-5 flex">
                {topRated.map((tv, key) => (
                  <Link
                    key={tv.id}
                    to={{
                      pathname: `tv/${tv.id}`,
                      query: { id: tv.id },
                    }}
                  >
                    <LargeCard key={tv.id} movie={tv} />
                  </Link>
                ))}
              </div>
            </section>
            <section className="popular">
              <h3 className="popular__title">POPULAR MOVIES</h3>
              <div className="top__cards mt-5 flex">
                {popular &&
                  popular.map((tv) => (
                    <Link
                      key={tv.id}
                      to={{
                        pathname: `tv/${tv.id}`,
                        query: { id: tv.id },
                      }}
                    >
                      <MediumCard key={tv.id} movie={tv} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">AIRING TODAY</h3>
              <div className="random__cards mt-5 flex">
                {airingToday &&
                  airingToday.map((tv) => (
                    <Link
                      key={tv.id}
                      to={{
                        pathname: `tv/${tv.id}`,
                        query: { id: tv.id },
                      }}
                    >
                      <MediumCard key={tv.id} movie={tv} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">ON THE AIR</h3>
              <div className="random__cards mt-5 flex">
                {onTheAir &&
                  onTheAir.map((tv) => (
                    <Link
                      key={tv.id}
                      to={{
                        pathname: `tv/${tv.id}`,
                        query: { id: tv.id },
                      }}
                    >
                      <SmallCard key={tv.id} movie={tv} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">MOVIES TRENDING THIS WEEK</h3>
              <div className="random__cards mt-5 flex">
                {trendingThisWeek &&
                  trendingThisWeek.map((tv) => (
                    <Link
                      key={tv.id}
                      to={{
                        pathname: `tv/${tv.id}`,
                        query: { id: tv.id },
                      }}
                    >
                      <SmallCard key={tv.id} movie={tv} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">MOVIES TRENDING TODAY</h3>
              <div className="random__cards mt-5 flex">
                {trendingToday &&
                  trendingToday.map((tv) => (
                    <Link
                      key={tv.id}
                      to={{
                        pathname: `tv/${tv.id}`,
                        query: { id: tv.id },
                      }}
                    >
                      <SmallCard key={tv.id} movie={tv} />
                    </Link>
                  ))}
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Series;
