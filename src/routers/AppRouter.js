import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageLanding from '../pages/PageLanding';
import PageMovie from '../pages/PageMovie';
import PageFavourites from '../pages/PageFavourites';
import PageAbout from '../pages/PageAbout';


import { appTitle } from '../Globals/globalVariables';

function AppRouter() {



  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header title={appTitle} />
        <Nav />
        <main>
          <Routes>
            <Route path="/" exact element={<PageLanding />} />
            <Route path="/Favourites" element={<PageFavourites />} />
            <Route path="/PageAbout" element={<PageAbout />} />
            <Route path="/individual" element={<PageMovie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;