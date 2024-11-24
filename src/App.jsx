import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import HotelPage from "./components/HotelPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const MyComp = () => {
    return (
      <>
        <NavBar />
        <HotelPage />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:location" element={<MyComp />}></Route>
        <Route path="*" element={<MyComp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
