// import components
import React from "react";
import PageHeader from "../../components/pageHeader";
import Footer from "../../components/footer";
import requests from "../../services/requests";
import LRow from "../../components/lRow";
import MRow from "../../components/mRow";
import SRow from "../../components/sRow";
import "./index.scss";

// movies component
const Movies = () => {
  return (
    <>
      <div className="movies">
        <PageHeader
          title="All Movies"
          subtitle="Hundreds of of movies at your disposal"
        />
        <main className="main pt-20" role="main">
          <LRow title="TOP RATED" fetchUrl={requests.fetchTopRatedMovies} />
          <MRow title="UPCOMING" fetchUrl={requests.fetchUpcomingMovies} />
          <SRow title="POPULAR" fetchUrl={requests.fetchPopularMovies} />
          <SRow title="ACTION" fetchUrl={requests.fetchActionMovies} />
          <SRow title="IN THEATRES" fetchUrl={requests.fetchNowPlayingMovies} />
          <SRow
            title="TRENDING THIS WEEK"
            fetchUrl={requests.fetchTrendingThisWeek}
          />
          <SRow title="TRENDING TODAY" fetchUrl={requests.fetchTrendingToday} />
          <SRow title="ADVENTURE" fetchUrl={requests.fetchAdventureMovies} />
          <SRow title="ANIMATIONS" fetchUrl={requests.fetchAnimationMovies} />
          <SRow title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
          <SRow title="CRIME" fetchUrl={requests.fetchCrimeMovies} />
          <SRow
            title="DOCUMENTARY"
            fetchUrl={requests.fetchDocumentaryMovies}
          />
          <SRow title="DRAMA" fetchUrl={requests.fetchDramaMovies} />
          <SRow title="FAMILY" fetchUrl={requests.fetchFamilyMovies} />
          <SRow title="FANTASY" fetchUrl={requests.fetchFantasyMovies} />
          <SRow title="HISTORY" fetchUrl={requests.fetchHistoryMovies} />
          <SRow title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
          <SRow title="MUSIC" fetchUrl={requests.fetchMusicMovies} />
          <SRow title="MYSTERY" fetchUrl={requests.fetchMysteryMovies} />
          <SRow title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
          <SRow title="SCIENCE FICTION" fetchUrl={requests.fetchSciFiMovies} />
          <SRow title="TV MOVIE" fetchUrl={requests.fetchTVMovies} />
          <SRow title="THRILLER" fetchUrl={requests.fetchThrillerMovies} />
          <SRow title="WAR" fetchUrl={requests.fetchWarMovies} />
          <SRow title="WESTERN" fetchUrl={requests.fetchWesternMovies} />
        </main>
        <Footer />
      </div>
    </>
  );
};

// export components
export default Movies;
