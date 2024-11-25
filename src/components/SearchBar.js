import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { addSearchMovieResult } from "../utils/searchSlice";
import { API_OPTIONS } from "../utils/constant";
import SearchMovieResult from "./SearchMovieResult";

const SearchBar = () => {
  const searchText = useRef("");
  const langKey = useSelector((store) => store.configLang.lang);
  const userSearchMovie = useSelector((store) => store?.search);
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addSearchMovieResult(jsonData));
  };

  return (
    <div className="flex justify-center ">
      <div className="absolute top-12 md:top-24 w-[95%] md:w-[50%] mt-[30%] md:mt-0">
        
        <form
          action=""
          className="h-12 grid grid-cols-12 rounded "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder={lang[langKey].searchPlaceholder}
            className="col-span-10 pl-6 text-sm md:text-xl rounded-s "
            ref={searchText}
            />
          <button
            className="text-white col-span-2 text-sm md:text-2xl bg-green-600 rounded-e"
            onClick={handleOnClick}
          >
            {lang[langKey].search}
          </button>
        </form>
        
        {searchText.current.value && <SearchMovieResult/> }
      </div>
    </div>
  );
};

export default SearchBar;
