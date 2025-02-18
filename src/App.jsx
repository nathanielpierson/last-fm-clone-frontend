import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import './App.css'
import { SongsPage } from './SongsPage'
import { Header } from './Header'
import { AlbumsPage } from './AlbumsPage'
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
