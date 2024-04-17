import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="my-8">
      <h2 className="text-white ml-14 text-2xl my-2">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex ml-12 ">
          {movies &&
            movies.map((movie) => (
              <MoviesCard moviesPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
