export function SongsIndex({ songs, albums }) {
  console.log(songs);
  console.log(albums);

  return (
    <div id="songs-index">
      <h1>All songs</h1>
      <div>
        {songs?.map((song) => (
          <div key={song.id}>
            <div>
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