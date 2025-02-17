import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import './App.css'
import { SongsPage } from './SongsPage'
import { Header } from './Header'
import { AlbumsPage } from './AlbumsPage'
// import { useState } from 'react'

function App() {

  return (
    <div>
      <Header />
      <SongsPage />
      <AlbumsPage />
      <p>h</p>
    </div>
  )
}

export default App
