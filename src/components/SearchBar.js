import { useDispatch,useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { addSearchMovieResult } from "../utils/movieSlice";
import { API_OPTIONS, Movie_Poster_URL } from "../utils/constant";


const SearchBar = ()=>{

    const searchText = useRef("");
    const langKey = useSelector(store=>store.configLang.lang); 
    const dispatch = useDispatch();

    const userSearchMovie = useSelector(store=>store?.movies);
   
    const handleOnClick =async ()=>{
        
        const data  = await fetch ("https://api.themoviedb.org/3/search/movie?query="+searchText.current.value+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addSearchMovieResult(jsonData))
   }

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
                {searchText.current.value && <div className="pt-12 bg-white bg-opacity-50 ">
                    <h2 className="text-3xl font-serif font-bold  pl-4">Top Results: </h2>
                    <div className="flex overflow-x-scroll ">

                        {userSearchMovie?.searchMovieResult && userSearchMovie?.searchMovieResult?.results.map((item)=>(
                        <img src={Movie_Poster_URL+item?.poster_path}
                        className=" h-72 w-52 my-12 ml-4 "
                        alt="Search Movie" />
                        )
                            )}

                    </div>
                </div>}
                </div>
            </div>
        )
    }

export default SearchBar;