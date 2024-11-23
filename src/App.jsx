import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/NavBar'
import HotelPage from './components/HotelPage'

import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <HotelPage />
    </BrowserRouter>
  )
}

export default App
