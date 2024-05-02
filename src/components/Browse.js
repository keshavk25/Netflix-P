import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import Search from "./Search";
import Footer from "./Footer";

const Browse = ()=>{
    const showSearch = useSelector(store=>store.search.showSearch);
    useNowPlayingMovies();

    return(
        <div className="bg-black">
            <Header/>
            {showSearch? 
            <Search/>:
            <>
            <MainContainer/>
            <SecondaryContainer/>
            <Footer/>
            </>
            }
        </div>
    )
}

export default Browse;