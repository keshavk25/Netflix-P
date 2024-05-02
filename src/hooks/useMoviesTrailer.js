import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


const useMoviesTrailer = (moviesId)=>{

    const dispatch = useDispatch();
    const  trailerVideoResult= useSelector((store) => store.movies.trailerVideo);
  
    const trailerVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+ moviesId +"/videos",
        API_OPTIONS
      );
      const jsonData = await data.json();
      const filterData = jsonData?.results?.filter(
        (data) => data?.type === "Trailer"
      );
      const Trailer = filterData ? filterData[0] : jsonData?.results[0];
      dispatch(addTrailerVideo(Trailer))
    };
  
    useEffect(() => {
      !trailerVideoResult && trailerVideo();
    }, []);
  

}

export default useMoviesTrailer;