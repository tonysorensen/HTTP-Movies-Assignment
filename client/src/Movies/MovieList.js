import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import axios from "axios";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        setMovieList(res.data);
        console.log("res from initial get", res);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
      <AddMovie />
    </div>
  );
}

export default MovieList;
