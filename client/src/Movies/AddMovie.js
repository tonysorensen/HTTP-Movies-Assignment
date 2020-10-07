import React, { useState } from "react";
import axios from "axios";

const AddMovie = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };
  const addMovie = () => {
    axios
      .post("http://localhost:5000/api/movies/", movie)
      .then((res) => {
        console.log("AddMovie.js: useEffect: post: res: ", res);
      })
      .catch((err) => console.error("err from AddMovie", err));
  };
  return (
    <div>
      <div>
        <h2>Add Movie</h2>
        <form onSubmit={addMovie} className="form">
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={movie.title}
          />

          <input
            type="text"
            name="director"
            onChange={handleChange}
            placeholder="Director"
            value={movie.director}
          />

          <input
            type="number"
            name="metascore"
            onChange={handleChange}
            placeholder="Metascore"
            value={movie.metascore}
          />

          <input
            type="text"
            name="stars"
            onChange={handleChange}
            placeholder="Stars"
            value={movie.stars}
          />

          <button className="md-button form-button" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
