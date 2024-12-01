import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import HotelPage from "./components/HotelPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const MyComp = () => {
    const [searchedHotel, setSearchedHotel] = useState("");
    return (
      <>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <NavBar setSearchedHotel={setSearchedHotel} />
          <HotelPage searchedHotel={searchedHotel} />
        </SnackbarProvider>
        </ThemeProvider>
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
