export function ArtistsIndex({ artists }) {
  return (
    <div id="artists-index">
      <h3>Albums</h3>
      <div className="container">
        <div className="row">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}
function ArtistCard({ artist }) {
  return (
    <div>
      <div>
        <img src={artist.img_url} alt="..." height="250px" width="250px" />
        <h5>artist: {artist.name}</h5>
      </div>
    </div>
  );
}
