import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import './App.css'
import { Header } from './Header'
import { SongsPage } from './SongsPage'
import { AlbumsPage } from './AlbumsPage'
import { ArtistsPage } from './ArtistsPage'
import { ModalShow } from './ModalShow'
// import { useState } from 'react'

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
      },
      {
        path: "/albums",
        element: <AlbumsPage />
      },
      {
        path: "/songs",
        element: <SongsPage />
      }
      // {
      //   path: "/signup",
      //   element: <SignupPage />,
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
    ],
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />;
      <p>h</p>
    </div>
  )
}

export default App
