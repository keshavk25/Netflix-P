import SearchBar from "./SearchBar";
import { bg_URL } from "../utils/constant";

const Search = ()=>{
    return(
        <>
        <img src={bg_URL}
            alt="background_image" 
            className="w-full h-full"
            />
          <SearchBar/>  
        </>
    )
}

export default Search;