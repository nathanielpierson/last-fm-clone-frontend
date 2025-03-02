import axios from "axios";
import { AlbumsIndex } from "./AlbumsIndex";
import { SongsIndex } from "./SongsIndex";
import { useState, useEffect } from "react";

export function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const handleIndex = () => {
    axios
      .get("http://localhost:3000/albums/random.json")
      .then(function (response) {
        setAlbums(response.data);
        console.log(response.data);
        setAlbums(response.data);
      });
    console.log("after the .then");
  };
  useEffect(handleIndex, []);

  return (
    <div>
      <AlbumsIndex albums={albums} onShow={handleIndex} />
      <SongsIndex albums={albums} />
    </div>
  );
}
