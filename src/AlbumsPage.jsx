import axios from "axios";
import { AlbumsIndex } from "./AlbumsIndex";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function AlbumsPage ( ) {
  const [albums, setAlbums] = useState([]);
  const handleIndex = () => {
    axios.get('http://localhost:3000/albums.json')
    .then(function (response) {
      setAlbums(response.data);
      console.log(response.data);
      setAlbums(response.data);
    })
    console.log('after the .then')
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <p>last.fm clone app</p>
      <AlbumsIndex albums={albums} onShow={handleIndex} />
      </div>
  )
}