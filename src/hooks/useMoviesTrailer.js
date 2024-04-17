import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";


const useMoviesTrailer = (moviesId)=>{

    const dispatch = useDispatch();
  
    const backgroundVideo = async () => {
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
      backgroundVideo();
    }, []);
  

}

export default useMoviesTrailer;