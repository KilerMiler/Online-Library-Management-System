// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Auth from './components/Auth';
import BookCatalog from './components/BookCatalog';
import UserProfile from './components/UserProfile';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import ProtectedRoute from './pages/ProtectedRoute';
import PdfCard from './pages/PdfCard.js';

import FirstSemester from './pages/FirstSemester.js';  
import SecondSemester from './pages/SecondSemester.js';
import ThirdSemester from './pages/ThirdSemester.js';
import FourthSemester from './pages/FourthSemester.js';
import FifthSemester from './pages/FifthSemester.js';
import SixthSemester from './pages/SixthSemester.js';
import SeventhSemester from './pages/SeventhSemester.js';
import EighthSemester from './pages/EighthSemester.js';
import MiscellaneousTexts from './pages/MiscellaneousTexts.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/:semester/:subject"
          element={<PdfCard semester={useParams().semester} subject={useParams().subject} />}
        />

        <Route path="/FirstSemester" element={<FirstSemester />} />
        <Route path="/SecondSemester" element={<SecondSemester />} />
        <Route path="/ThirdSemester" element={<ThirdSemester />} />
        <Route path="/FourthSemester" element={<FourthSemester />} />
        <Route path="/FifthSemester" element={<FifthSemester />} />
        <Route path="/SixthSemester" element={<SixthSemester />} />
        <Route path="/SeventhSemester" element={<SeventhSemester />} />
        <Route path="/EighthSemester" element={<EighthSemester />} />
        <Route path="/MiscellaneousTexts" element={<MiscellaneousTexts />} />

        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/books" element={<BookCatalog />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/protected" element={<ProtectedRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
