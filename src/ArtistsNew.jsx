import axios from "axios";

export function ArtistsNew() {
  const handleCreate = (event) => {
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/artists.json", params)
      .then((response) => {
        console.log(response.data);
        window.location.href = "/home/artists";
      });
  };
  return (
    <div>
      <form onSubmit={handleCreate}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image url: <input name="img_url" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
