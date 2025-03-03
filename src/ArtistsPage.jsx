import { ArtistsIndex } from "./ArtistsIndex";
import { ArtistsNew } from "./ArtistsNew";
import { useState, useEffect } from "react";

import axios from "axios";

export function ArtistsPage() {
  const [artists, setArtists] = useState([]);
  const handleIndex = () => {
    axios
      .get("http://localhost:3000/artists/random.json")
      .then(function (response) {
        setArtists(response.data);
        console.log(response.data);
        setArtists(response.data);
      });
  };
  useEffect(handleIndex, []);
  return (
    <div>
      <ArtistsIndex artists={artists} />
      <ArtistsNew />
    </div>
  );
}
