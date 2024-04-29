import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import Search from "./Search";

const Browse = ()=>{
    const showSearch = useSelector(store=>store.search.showSearch);
    useNowPlayingMovies();

    return(
        <div>
            <Header/>
            {showSearch? 
            <Search/>:
            <>
            <MainContainer/>
            <SecondaryContainer/>
            </>
            }
        </div>
    )
}

export default Browse;