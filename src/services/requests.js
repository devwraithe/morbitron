// create variables
const API_KEY = "af233f03d0ac4520aa6ac7eeec7339ca";
const baseURL = "https://api.themoviedb.org/3/";

// requests object
const requests = {
  // movies requests
  fetchTopRatedMovies: `${baseURL}movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchUpcomingMovies: `${baseURL}movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `${baseURL}movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchNowPlayingMovies: `${baseURL}movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrendingThisWeek: `${baseURL}trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingToday: `${baseURL}trending/movie/day?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchAdventureMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchAnimationMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchComedyMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchCrimeMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchDocumentaryMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDramaMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchFamilyMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchFantasyMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchHistoryMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchHorrorMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchMusicMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchMysteryMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchRomanceMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchSciFiMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10770`,
  fetchTVMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchThrillerMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchWarMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=10752`,
  fetchWesternMovies: `${baseURL}discover/movie?api_key=${API_KEY}&with_genres=37`,
};

// export object
export default requests;
