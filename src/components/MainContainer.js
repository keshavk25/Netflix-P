import BackgroundVideo from "./BackgroundVideo";
import BackgroundVideoTitle from "./BackgroundVideoTitle";
import {useSelector} from "react-redux";

const MainContainer =  ()=>{

    const moviesList= useSelector(store=>store.movies?.nowPlayingMovies)
    if(moviesList== null)return;

    const {title,overview,id} = moviesList[1];

    return (
        <div >
            <BackgroundVideo moviesId={id}/>
            <BackgroundVideoTitle videoTitle={title} overview={overview}/>
        </div>
    )
}

export default MainContainer;