export function AlbumsIndex ({albums, onShow}) {
  console.log(albums);

  return (
  <div id="albums-index">
    <h1>All albums</h1>
    <div>
      {albums.map(album => (
      <div key={album.id} className="col-md-4">
        <div className="card">
        <img src={album.img_url} alt="..." height="200px" />
          <h5>{album.title}</h5>
          <h5>{album.artist_id}</h5>
          <h5>{album.year}</h5>
          <h5>{album.genre}</h5>
        </div>
      </div>
   ))}
    </div>
  </div>
  );
}