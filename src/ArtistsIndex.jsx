export function ArtistsIndex({ artists }) {
  return (
    <div id="artists-index">
      <h1>All artists</h1>
      <div>
        {artists?.map((artist) => (
          <div key={artist.id}>
            <div className="card">
              <img
                src={artist.img_url}
                alt="..."
                height="250px"
                width="250px"
              />
              <p>{artist.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
