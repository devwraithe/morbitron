// import components
import React from "react";
import PageHeader from "../../components/pageHeader";
import Footer from "../../components/footer";
import requests from "../../services/requests";
import LRow from "../../components/lRow";
import MRow from "../../components/mRow";
import SRow from "../../components/sRow";
import "./index.scss";
import bg from "../../assets/images/wall.jpg";

// home component
const Home = () => {
  return (
    <>
      <div className="home">
        <PageHeader
          title="Welcome to Moovies"
          subtitle="Access to millions of Movies and TV Series to explore"
          bgImg={bg}
        />
        <main className="main pt-20" role="main">
          <LRow
            title="TOP RATED MOVIES"
            fetchUrl={requests.fetchTopRatedMovies}
          />
          <MRow
            title="UPCOMING MOVIES"
            fetchUrl={requests.fetchUpcomingMovies}
          />
          <SRow title="POPULAR MOVIES" fetchUrl={requests.fetchPopularMovies} />
          <SRow
            title="MOVIES IN THEATRES"
            fetchUrl={requests.fetchNowPlayingMovies}
          />
          <SRow
            title="TRENDING THIS WEEK"
            fetchUrl={requests.fetchTrendingThisWeek}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

// export components
export default Home;
