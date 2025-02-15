export function SongsIndex ({songs, onShow}) {
  console.log(songs);
  <div id="songs-index">
    <h1>All songs</h1>
    <div>
      {songs.map(song => (
      <div key={song.id} className="col-md-4">
        <div className="card">
          <h5>{song.title}</h5>
          <h5>{song.album}</h5>
          <h5>{song.year}</h5>
          <h5>{song.genre}</h5>
          <button type="button" className="btn btn-primary" onClick={() => onShow(song)}>see em</button>
        </div>
      </div>
   ))}
    </div>
  </div>
}