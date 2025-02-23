// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

export function Header () {
return (
  <div>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lastfm_logo.svg/2560px-Lastfm_logo.svg.png" width={250} height={70} />
<br></br>
<br></br>
<div className="btn-group" role="group" aria-label="Basic example">
  <Link to="/home/artists" className="btn btn-secondary">Artists</Link>
  <Link to="/home/albums" className="btn btn-secondary">Albums</Link>
  <Link to="/home/songs" className="btn btn-secondary">Songs</Link>
</div>
</div>
)
}