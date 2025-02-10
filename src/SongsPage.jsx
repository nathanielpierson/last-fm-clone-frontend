import axios from "axios"

export function SongsPage () {
var setSongs = [];
const handleIndex = () => {
  console.log('handleIndex called');
  axios.get('http://localhost:3000/songs.json')
  .then(function (response) {
    console.log('inside the .then')
    console.log(response.data);
    setSongs(response.data);
  })
  console.log('after the .then')
}

<button onClick={handleIndex}>Get data from rails</button>
}