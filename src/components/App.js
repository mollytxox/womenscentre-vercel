// import styles
import './../css/styles.min.css';
// import dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import components
import Footer from './Footer'
import Navbar from './Navbar'
// import pages
import Home from './../pages/Home'
import AboutUs from './../pages/AboutUs'
import Donate from './../pages/Donate'
import OfferItem from './../pages/OfferItem'
import WhatWeOffer from './../pages/WhatWeOffer'
import GetInTouch from './../pages/GetInTouch'
import SearchResults from '../pages/SearchResults';


// required for mapbox
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoibW9sbHl0eG94IiwiYSI6ImNsM3J3bnh0ODAzbWgzaWw4bmpzaTdxOHEifQ.TSBVHJEKeygThQeJuFEUhA';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/offer/:id" element={<OfferItem />} />
        <Route path="/whatweoffer" element={<WhatWeOffer />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        {/* search route  */}
        <Route path="/search-results/:searchString" element={<SearchResults />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
