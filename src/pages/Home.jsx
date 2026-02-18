import MovieCard from "../components/MovieCard";
import useMovieList from "../hooks/useMovieList";

const Home = () => {
  const { movieList } = useMovieList("harry", "avengers", "batman");
  console.log(movieList);
  return (
    <>
      {movieList.length > 0 &&
        movieList.map((movie) => (
          <MovieCard key={movie.imdbID} id={movie.imdbID} {...movie} />
        ))}
      <MovieCard />
    </>
  );
};

export default Home;
