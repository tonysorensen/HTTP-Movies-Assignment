import React, { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });

  const addMovie = () => {
    axios
      .post("http://localhost:5000/api/movies/", movie)
      .then((res) => {
        console.log("AddMovie.js: useEffect: post: res: ", res);
      })
      .catch((err) => console.error("err from AddMovie", err));
  };

  const handleChange = (e) => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleStarsChange = (e) => {
    const changedStars = e.target.value.split(",");
    setMovie({
      ...movie,
      stars: changedStars,
    });
  };

  return (
    <div className="movieForms">
      <div className="addMovie">
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
            onChange={handleStarsChange}
            placeholder="Stars"
            value={movie.stars}
          />

          <button className="btn" type="submit">
            Add a Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
