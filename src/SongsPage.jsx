import axios from "axios";
import { SongsIndex } from "./SongsIndex";
import { useState, useEffect } from "react";
import { ModalShow } from "./ModalShow";

export function SongsPage () {
const [songs, setSongs] = useState([]);
const handleIndex = () => {
  console.log('handleIndex called');
  axios.get('http://localhost:3000/songs.json')
  .then(function (response) {
    setSongs(response.data);
    console.log('inside the .then');
    console.log(response.data);
    setSongs(response.data);
  })
  console.log('after the .then')
}

useEffect(handleIndex, []);


return (
  <div>
    <p>last.fm clone app</p>
    <SongsIndex songs={songs} onShow={handleIndex} />

  </div>
);
}
