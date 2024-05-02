import { API_OPTIONS } from "../utils/constant";
import { useDispatch,  useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{

    const dispatch = useDispatch();
    const upcomingMoviesResult = useSelector((store) => store.movies.upcomingMovies);


    const upcomingMovies= async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData))
    }
useEffect(()=>{
    !upcomingMoviesResult && upcomingMovies();
},[])

}

export default useUpcomingMovies;