import BackgroundVideo from "./BackgroundVideo";
import BackgroundVideoTitle from "./BackgroundVideoTitle";
import {useSelector} from "react-redux";

const MainContainer =  ()=>{

    const moviesList= useSelector(store=>store.movies?.nowPlayingMovies)
    if(moviesList== null)return;

    // console.log(moviesList[1])
    const {title,overview,id} = moviesList[1];
    console.log(id)

    return (
        <div >
            <BackgroundVideo moviesId={id}/>
            <BackgroundVideoTitle videoTitle={title} overview={overview}/>
        </div>
    )
}

export default MainContainer;