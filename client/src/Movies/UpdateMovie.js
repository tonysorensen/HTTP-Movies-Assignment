import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: [],
};

const UpdateMovie = () => {
  const [movie, setMovie] = useState(initialMovie);
  const { id } = useParams();
  const { push } = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log("UpdateMovie.js: useEffect: get: res: ", res);
        setMovie(res.data);
      })
      .catch((err) => console.error(`unable to getById # ${id}: `, err));
  }, [id]);

  const handleChange = (e) => {
    e.persist();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a PUT request to edit the item

    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        console.log("res from put", res);
        push(`/`);
      })
      .catch((err) => {
        console.log("err from put", err);
      });
  };
  console.log("movie", movie);
  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit} className="form">
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

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;

// let movies = [
//     {
//       id: 0,
//       title: "The Godfather",
//       director: "Francis Ford Coppola",
//       metascore: 100,
//       stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
//     },
//     {
//       id: 1,
//       title: "Star Wars",
//       director: "George Lucas",
//       metascore: 92,
//       stars: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"]
//     },
