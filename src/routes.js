// import components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/app";
import Film from "./pages/film";
import Movies from "./pages/films/movies";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
};

// export component
export default SiteRoutes;
