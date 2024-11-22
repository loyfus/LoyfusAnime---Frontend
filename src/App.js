import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/NavBar.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
