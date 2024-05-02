import SearchBar from "./SearchBar";
import { bg_URL } from "../utils/constant";
import Footer from "./Footer";

const Search = ()=>{
    return(
        <>
        <div>
        <img src={bg_URL}
            alt="background_image" 
            className="fixed h-screen object-cover md:w-full "
            />
          <SearchBar/> 
          </div> 
        </>
    )
}

export default Search;