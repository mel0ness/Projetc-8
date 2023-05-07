import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Propos from './Pages/Propos';
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Logements from "./Assets/logements.json"
import Logement from "./Pages/Logement/Logement"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home logements={Logements}/>} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement/:idLogement" element={<Logement Logements={Logements} />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

