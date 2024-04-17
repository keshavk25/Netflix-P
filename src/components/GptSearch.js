import GptSearchBar from "./GptSearchBar";
import { bg_URL } from "../utils/constant";

const GptSearch = ()=>{
    return(
        <>
        <img src={bg_URL}
            alt="background_image" 
            className="w-full h-full"
            />
          <GptSearchBar/>  
        </>
    )
}

export default GptSearch;