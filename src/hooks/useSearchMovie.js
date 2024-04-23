import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useSelector } from "react-redux";

const UseSearchMovie =  ()=>{

    const searchMovie = useSelector(store=>store.movies);

     const searchResult = async ()=>{

    const data  = await fetch ("https://api.themoviedb.org/3/search/movie?query="+ searchMovie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const jsonData = await data.json();
    console.log(jsonData)
    }

    useEffect(()=>{
         searchResult();
    },[])

}

export default UseSearchMovie;