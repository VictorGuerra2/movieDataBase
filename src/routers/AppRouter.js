import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import PageLanding from '../pages/PageLanding';
import PageMovie from '../pages/PageMovie';
import PageFavourites from '../pages/PageFavourites';
import PageAbout from '../pages/PageAbout';
import Search from "../components/Search";

import { appTitle } from '../Globals/globalVariables';

function AppRouter() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header title={appTitle} />
        <main>
          <Routes>
            <Route path="/" exact element={<PageLanding />} />
            <Route path="/favourites" element={<PageFavourites />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/individual" element={<PageMovie />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;