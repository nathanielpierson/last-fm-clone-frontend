export function SongsIndex ({songs, onShow}) {
  console.log(songs);

  return (
  <div id="songs-index">
    <h1>All songs</h1>
    <div>
      {songs.map(song => (
      <div key={song.id}>
        <div className="card">
          <p>{song.title}</p>
          <p>{song.artist}</p>
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