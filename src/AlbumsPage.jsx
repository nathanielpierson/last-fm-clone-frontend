import axios from "axios";
import { AlbumsIndex } from "./AlbumsIndex";
import { useState, useEffect } from "react";
import { ModalShow } from "./ModalShow";

export function AlbumsPage ( ) {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const handleIndex = () => {
    axios.get('http://localhost:3000/albums.json')
    .then(function (response) {
      setAlbums(response.data);
      console.log(response.data);
      setAlbums(response.data);
    })
    axios.get('http://localhost:3000/artists.json')
    .then(function (response) {
      setArtists(response.data);
      console.log(response.data);
      setArtists(response.data);
    })
    console.log('after the .then')
  }
  useEffect(handleIndex, []);

  return (
    <div>
      <p>last.fm clone app</p>
      <AlbumsIndex albums={albums} artists={artists} onShow={handleIndex} />
      <p>placeholder modal</p>
      <ModalShow />
      <p>placeholder modal</p>
      </div>
  )
}