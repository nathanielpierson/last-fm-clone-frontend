export function AlbumsIndex ({albums, artists}) {
  console.log(albums);
  console.log(artists);
  return (
  <div id="albums-index">
    <h1>All albums</h1>
      {albums.map(album => (
      <div key={album.id} >
        <div className="card">
        <img src={album.img_url} alt="..." height="200px" />
          <h5>album: {album.title}</h5>
          <h5>by {album.artist}</h5>
          <h5>year: {album.year}</h5>
          <h5>genre:{album.genre}</h5>
        </div>
      </div>
   ))}
    </div>
  );
}
