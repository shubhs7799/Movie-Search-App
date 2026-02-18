import axios from "axios";
import { useEffect, useState } from "react";
import { searchMovie } from "../apis/omdb";

const useMovieList = (...args) => {
  const [movieList, setMovieList] = useState([]);

  async function downloadDefaultMovie(...args) {
    try {
      let urls = args.map((name) => searchMovie(name));
      const response = await axios.all(urls.map((url) => axios.get(url)));

      const movies = response
        .filter((res) => !res.data.Error)
        .map((res) => res.data.Search)
        .flat();

      const uniqueMovies = Array.from(
        new Map(movies.map((movie) => [movie.imdbID, movie])).values(),
      );

      setMovieList(uniqueMovies);
    } catch (error) {
      console.log("api request failed : ", error);
    }
  }

  useEffect(() => {
    downloadDefaultMovie(...args);
  }, [...args]);

  return { movieList };
};

export default useMovieList;
