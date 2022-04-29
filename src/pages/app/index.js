import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import axios from "axios";
import "./index.scss";
import Navbar from "../../components/navbar";
import BottomNav from "../../components/bottomNav";
import Header from "../../components/header";
import SmallCard from "../../components/smallCard";
import { Link } from "react-router-dom";
import LargeCard from "../../components/largeCard";
import MediumCard from "../../components/mediumCard";

const App = () => {
  const [topRated, setTopRated] = useState([]);
  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [inTheatres, setInTheatres] = useState([]);
  const [trendingThisWeek, setTrendingThisWeek] = useState([]);
  const [trendingToday, setTrendingToday] = useState([]);

  const movieBaseUrl = "https://api.themoviedb.org/3/movie/";
  const trendingBaseUrl = "https://api.themoviedb.org/3/trending/";
  const API_KEY = "af233f03d0ac4520aa6ac7eeec7339ca";

  const fetchTopRated = async () => {
    axios
      .get(`${movieBaseUrl}top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        setTopRated(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchLatest = async () => {
    axios
      .get(`${movieBaseUrl}latest?api_key=${API_KEY}&language=en-US`)
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
      .get(`${movieBaseUrl}popular?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setPopular(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUpcoming = async () => {
    axios
      .get(`${movieBaseUrl}upcoming?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setUpcoming(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchInTheatres = async () => {
    axios
      .get(`${movieBaseUrl}now_playing?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        console.log(res.data.results);
        setInTheatres(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTrendingThisWeek = async () => {
    axios
      .get(`${trendingBaseUrl}movie/week?api_key=${API_KEY}&language=en-US`)
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
      .get(`${trendingBaseUrl}movie/day?api_key=${API_KEY}&language=en-US`)
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
    fetchUpcoming();
    fetchInTheatres();
    fetchTrendingThisWeek();
    fetchTrendingToday();
  }, []);

  return (
    <>
      <div className="app">
        <div className="wrapper">
          <Navbar />
          <Header movie={latest} />
          <main className="main pt-16" role="main">
            <section className="top">
              <h3 className="top__title">TOP RATED MOVIES</h3>
              <div className="top__cards mt-5 flex">
                {topRated.map((movie, key) => (
                  <Link
                    key={movie.id}
                    to={{
                      pathname: `movie/${movie.id}`,
                      query: { id: movie.id },
                    }}
                  >
                    <LargeCard key={movie.id} movie={movie} />
                  </Link>
                ))}
              </div>
            </section>
            <section className="popular">
              <h3 className="popular__title">POPULAR MOVIES</h3>
              <div className="top__cards mt-5 flex">
                {popular &&
                  popular.map((movie) => (
                    <Link
                      key={movie.id}
                      to={{
                        pathname: `movie/${movie.id}`,
                        query: { id: movie.id },
                      }}
                    >
                      <MediumCard key={movie.id} movie={movie} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">UPCOMING MOVIES</h3>
              <div className="random__cards mt-5 flex">
                {upcoming &&
                  upcoming.map((movie) => (
                    <Link
                      key={movie.id}
                      to={{
                        pathname: `movie/${movie.id}`,
                        query: { id: movie.id },
                      }}
                    >
                      <MediumCard key={movie.id} movie={movie} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">IN THEATRES</h3>
              <div className="random__cards mt-5 flex">
                {inTheatres &&
                  inTheatres.map((movie) => (
                    <Link
                      key={movie.id}
                      to={{
                        pathname: `movie/${movie.id}`,
                        query: { id: movie.id },
                      }}
                    >
                      <SmallCard key={movie.id} movie={movie} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">MOVIES TRENDING THIS WEEK</h3>
              <div className="random__cards mt-5 flex">
                {trendingThisWeek &&
                  trendingThisWeek.map((movie) => (
                    <Link
                      key={movie.id}
                      to={{
                        pathname: `movie/${movie.id}`,
                        query: { id: movie.id },
                      }}
                    >
                      <SmallCard key={movie.id} movie={movie} />
                    </Link>
                  ))}
              </div>
            </section>
            <section className="random">
              <h3 className="random__title">MOVIES TRENDING TODAY</h3>
              <div className="random__cards mt-5 flex">
                {trendingToday &&
                  trendingToday.map((movie) => (
                    <Link
                      key={movie.id}
                      to={{
                        pathname: `movie/${movie.id}`,
                        query: { id: movie.id },
                      }}
                    >
                      <SmallCard key={movie.id} movie={movie} />
                    </Link>
                  ))}
              </div>
            </section>
          </main>{" "}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default App;
