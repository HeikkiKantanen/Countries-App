import React from "react";
import CountriesList from "./CountriesList";
import Home from "./Home";
import CountrySingle from "./CountrySingle";
import { useParams, BrowserRouter, Link, Routes, Route } from "react-router-dom";

const RouteWrapper = (props) => {
  const params = useParams();

  return <CountrySingle params={params}{...props}/>
}

const App = () => {
  return (
      <BrowserRouter>
      <div className="nav-wrapper">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/countries">Countries</Link>
            </li>
          </ul>
        </nav>
      </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:name" element={<RouteWrapper />} />
        </Routes>
      </ BrowserRouter>
  );
};

export default App;
