import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="my-12">
      <h2 className="text-white ml-8 md:ml-12 text-2xl my-4">{title}</h2>
      <div className="flex overflow-x-scroll ml-8 md:ml-12 mr-4">
        <div className="flex  ">
          {movies &&
            movies.map((movie) => (
              <MoviesCard key={movie?.poster_path} moviesPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
