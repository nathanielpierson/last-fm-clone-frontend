export function AlbumsIndex ({albums, artists}) {
  console.log(albums);
  console.log(artists);
  {artists.map(artist => (
    <div key={artist.id}>
      <div className="card">
      <p>artist: {artist.name}</p>
    </div>
    </div>
  ))}
  return (
  <div id="albums-index">
    <h1>All albums</h1>
      {albums.map(album => (
      <div key={album.id} >
        <div className="card">
        <img src={album.img_url} alt="..." height="200px" />
          <h5>album: {album.title}</h5>
          <h5>by {album.artist_id}</h5>
          <h5>year: {album.year}</h5>
          <h5>genre:{album.genre}</h5>
        </div>
      </div>
   ))}
    </div>
  );
}
