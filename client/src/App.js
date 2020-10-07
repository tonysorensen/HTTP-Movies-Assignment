import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import AddMovie from "./Movies/AddMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} />
      </Route>
      <Route path="/update-movie/:id">
        <UpdateMovie />
      </Route>
      <Route path="/add-movie">
        <AddMovie />
      </Route>
    </>
  );
};

export default App;
