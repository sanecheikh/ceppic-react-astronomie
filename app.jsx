//import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

//import BoutonIncrement from './components/BoutonIncrement';
//import  Users  from './components/Users';
import { Routes, Route, Link } from "react-router-dom";
import Article from 'Article';
import AjouterArticle from 'AjouterArticle';
import APropos from 'APropos';

function App() {
    return (
      <div className="App">
        
  <Nav/>
        <Routes>
          
        <Route path="Article" element={<Article />} />
          <Route path="AjouterArticle" element={<AjouterArticle />} />
          <Route path="APropos" element={<APropos />} />
        </Routes>

<Header
title="Blog Astronomie"
texte="Blog d'astronomie avec React JS pour le frontend et Firebase pour le backend"/>

{/* <RandomUser /> */}

{/* <Users /> */}
<Footer/>

</div>

);
};

export default App;