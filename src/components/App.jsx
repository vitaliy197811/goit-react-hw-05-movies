import { Route, Routes} from "react-router-dom";
import { lazy } from "react";
import Layout from "components/Layout/Layout";
// import Home from "./Home/Home";
// import Movies from "./Movies/Movies";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Cast from "path/to/pages/Products";
// import Reviews from "path/to/pages/Products";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />

          {/* <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route> */}
        </Route>
      </Routes>
    </>
  );
};

