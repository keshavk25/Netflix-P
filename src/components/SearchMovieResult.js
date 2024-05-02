import { useSelector } from "react-redux";
import { Movie_Poster_URL } from "../utils/constant";

const SearchMovieResult = ()=>{
    
    const userSearchMovie = useSelector((store) => store?.search);

    return(
        <div>
             <div className=" pt-4 bg-white bg-opacity-50 ">
            <h2 className="text-3xl font-serif font-bold py-2 pl-4">
              Top Results:{" "}
            </h2>
            <div className="flex overflow-scroll flex-wrap w-full h-[80%] ">

              {userSearchMovie?.searchMovieResult &&
                userSearchMovie?.searchMovieResult?.results.map((item) => (
                  <div className="w-44 h-60 md:h-72 mb-2 ml-4 ">
                    {console.log(item?.title)}
                    <img
                      key={item?.id}
                      src={Movie_Poster_URL + item?.poster_path}
                      className="h-48 w-32 md:h-60 md:w-48"
                      alt="Search Movie"
                    />
                    <p className="font-medium">{item?.title}</p>
                  </div>
                ))}
                
            </div>
          </div>
        </div>
    )
}

export default SearchMovieResult; 