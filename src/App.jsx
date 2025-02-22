// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import './App.css'
import { Header } from './Header'
import { SongsPage } from './SongsPage'
import { AlbumsPage } from './AlbumsPage'
import { ArtistsPage } from './ArtistsPage'
import { ModalShow } from './ModalShow'
// import { useState } from 'react'

function App() {

  return (
    <div>
      <Header />
      <ModalShow />
      <SongsPage />
      <AlbumsPage />
      <p>h</p>
    </div>
  )
}

export default App
