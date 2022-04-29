// import components
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/app";
import Series from "./pages/series";
import ViewMovie from "./pages/viewMovie";
import ViewTv from "./pages/viewTv";

// routes component
const SiteRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/series/" exact element={<Series />} />
          <Route path="/movie/:id" element={<ViewMovie />} />
          <Route path="/series/tv/:id" exact element={<ViewTv />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// export component
export default SiteRoutes;
