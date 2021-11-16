import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Navbar from "./components/Navbar/Navbar";
import "./components/Navbar/Navbar.css";
import "./app.css";

function App() {
  return (
    <NewsContextProvider>
      <Navbar />
      <News />
    </NewsContextProvider>
  );
}

export default App;
