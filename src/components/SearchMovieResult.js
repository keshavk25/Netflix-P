import { useSelector } from "react-redux";
import { Movie_Poster_URL } from "../utils/constant";
import lang from "../utils/languageConstant";

const SearchMovieResult = ()=>{
    
    const userSearchMovie = useSelector((store) => store?.search);
    const langKey = useSelector((store)=>store?.configLang?.lang)
    if(!userSearchMovie?.searchMovieResult) return null;

    return(
        <div >
             <div className=" pt-4 bg-white bg-opacity-50">
            <h2 className="text-3xl font-serif font-bold py-2 pl-4">
              {lang[langKey]?.topResult} :
            </h2>
            <div className="flex overflow-scroll flex-wrap w-full  h-screen">

              {userSearchMovie?.searchMovieResult &&  userSearchMovie?.searchMovieResult?.results.map((item) => (
                <div>
                  { item.original_language == "hi" || item.original_language == "en"  ?
                  <div className="w-44 h-60 md:h-72 mb-2 ml-3 " key={item?.id}>
                    {console.log(item.original_language)}
                    
                   <div>
                    <img
                      
                      src={Movie_Poster_URL + item?.poster_path}
                      className="h-48 w-32 md:h-60 md:w-48"
                      alt="Search Movie"
                    />
                    <p className="font-medium text-white bg-gray-400-500 bg-opacity-55">{item?.title} </p></div>
                     
                  </div>
                  : "" } 
                  </div>
                ))}
                
            </div>
          </div>
        </div>
    )
}

export default SearchMovieResult; 