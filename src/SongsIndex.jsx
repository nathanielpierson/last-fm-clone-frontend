export function SongsIndex ({songs, onShow}) {
  console.log(songs);

  return (
  <div id="songs-index">
    <h1>All songs</h1>
    <div>
      {songs.map(song => (
      <div key={song.id} className="col-md-4">
        <div className="card">
          <p>{song.title}</p>
          <p>{song.artist_id}</p>
          <p>{song.album}</p>
          <p>{song.year}</p>
          <p>{song.genre}</p>
        </div>
      </div>
   ))}
    </div>
  </div>
  );
}