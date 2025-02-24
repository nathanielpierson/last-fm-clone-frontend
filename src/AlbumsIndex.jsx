export function AlbumsIndex({ albums, artists }) {
  console.log(albums);
  console.log(artists);
  return (
    <div id="albums-index">
      <h3>Albums</h3>
      <div className="container">
        <div className="row">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>
    </div>
  );
}
function AlbumCard({ album }) {
  return (
    <div className="card col-12 text-center col-md-6 col-lg-4">
      <img src={album.img_url} alt="..." height="250px" width="250px" />
      <h5>album: {album.title}</h5>
      <h5>by {album.artist}</h5>
      <p className="fs-5"> {album.year} </p>
      <h5>genre: {album.genre}</h5>
    </div>
  );
}
