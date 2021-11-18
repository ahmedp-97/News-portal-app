import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import { Routes, Route, Link } from "react-router-dom";
import News from "./components/News";
import "./app.css";

function App() {
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="search" element={<Search />} />
           </Routes>
        
      
        
      
  );
}

function Home() {
  return (
    <>
    <nav className="navbarItems">
    <h1 className="pageName">News Portal App</h1>
    <li className="navMenu">
      <Link to="/article">Article</Link>
      <Link to="/search">Search</Link>
    </li> 
      </nav>
      <main>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
      </main>
      
    </>
  );
}

function Article() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
function Search() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
