import MoviesList from "./MoviesList"
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer =  ()=>{

    const movies = useSelector(store=>store.movies);
  
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        
        movies?.nowPlayingMovies &&(
            <div className="bg-black">
        <div className="-mt-8 md:-mt-72">
        <MoviesList title="Now Playing" movies={movies?.nowPlayingMovies}/>
        <MoviesList title="Top Rated" movies={movies?.topRatedMovies?.results}/>
        <MoviesList title="Popular" movies={movies?.popularMovies?.results}/>
        <MoviesList title="Upcoming" movies={movies?.upcomingMovies?.results}/>
        </div>
        </div>
        )
    )
}

export default  SecondaryContainer