import { useDispatch,useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useEffect,useRef } from "react";
import { addSearchMovie, addSearchMovieResult } from "../utils/movieSlice";
import { API_OPTIONS, Movie_Poster_URL } from "../utils/constant";


const GptSearchBar = ()=>{

    const searchText = useRef(null);
    const langKey = useSelector(store=>store.configLang.lang); 
    const dispatch = useDispatch();

    const userSearchMovie = useSelector(store=>store?.movies);

    const handleOnClick = ()=>{
        console.log(searchText.current.value);
        dispatch(addSearchMovie(searchText.current.value))
        searchResult();  
    }
    const searchResult = async ()=>{
        
        const data  = await fetch ("https://api.themoviedb.org/3/search/movie?query="+userSearchMovie?.searchMovie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addSearchMovieResult(jsonData))
   console.log(jsonData)
   }
    
//    const movieResult = Movie_Poster_URL+userSearchMovie?.searchMovieResult?.results.map((item)=>item?.poster_path)

    return(
        <div className="flex justify-center ">
            <div className="absolute top-28 w-[50%]">

            
                <form action="" className="h-12 grid grid-cols-12 rounded " onSubmit={(e)=>e.preventDefault()}> 
                    <input type="text" placeholder={lang[langKey].searchPlaceholder} className="col-span-10 pl-6 text-xl rounded-s"  
                    ref={searchText}
                    />
                    <button className="text-white col-span-2 text-2xl bg-green-600 rounded-e" 
                    onClick={handleOnClick}
                    > {lang[langKey].search}</button>
                </form>
                <div className="pt-12 bg-white bg-opacity-50">
                    <h2 className="text-3xl font-serif font-bold  pl-8">Top Results: </h2>
                    <div className="flex flex-wrap">

                        {userSearchMovie?.searchMovieResult?.results.map((item)=>(
                            <img src={Movie_Poster_URL+item?.poster_path} 
                            className=" h-80 w-54 m-8 mr-0 "
                            alt="Search Movie" />
                        )
                            )}

                    </div>
                </div>
                </div>
            </div>
        )
    }

export default GptSearchBar;