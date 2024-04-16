import MoviesList from "./MoviesList"
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";

const SecondaryContainer =  ()=>{

    const movies = useSelector(store=>store.movies);
    // console.log(movies)
    usePopularMovies();

    return (
        movies?.nowPlayingMovies &&(
            <div className="bg-black">
        <div className="-mt-56">
        <MoviesList title="Now Playing" movies={movies?.nowPlayingMovies}/>
        <MoviesList title="Popular" movies={movies?.popularMovies.results}/>
        {console.log(movies?.popularMovie)}
        <MoviesList title="Now Playing" movies={movies?.nowPlayingMovies}/>
        <MoviesList title="Now Playing" movies={movies?.nowPlayingMovies}/>
        </div>
        </div>
        )
    )
}

export default  SecondaryContainer