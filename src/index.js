import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes,Route } from "react-router-dom";


import Article from "./pages/Article";
import AjouterArticle from "./pages/AjouterArticle";
import APropos from "./pages/APropos";
import Footer from "./components/Footer";
import Header from "./components/Header";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter> 
   <Header/>
   <Routes>

       
        
        <Route path="article" element={<Article/>} />
        <Route path="ajouterarticle" element={<AjouterArticle/>} />
        <Route path="apropos" element={<APropos/>} />

    
  
   </Routes>
    <Footer/>

   </BrowserRouter>  
   
  </React.StrictMode>
);

