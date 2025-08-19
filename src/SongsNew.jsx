import axios from "axios";

export function SongsNew() {
  const handleCreate = (event) => {
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/songs.json", params).then((response) => {
      window.location.href = "/home/songs";
    });
  };
  return (
    <div>
      <form onSubmit={handleCreate}>
        <div>
          Name: <input name="title" type="text" />
        </div>
        <div>
          Year: <input name="year" type="text" />
        </div>
        {/* <div>
          Album: <input name="album" type="text" />
        </div>
        <div>
          Artist: <input name="artist" type="text" />
        </div>
        <div>
          Genre: <input name="genre" type="text" />
        </div> */}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
