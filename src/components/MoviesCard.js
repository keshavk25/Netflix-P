import { Movie_Poster_URL } from "../utils/constant";

const MoviesCard = ({moviesPath})=>{

    return (
        <div className="w-48 mx-1">
            <img src={Movie_Poster_URL+moviesPath}
            className="w-48 h-72"
            alt="" />
        </div>
    )
}

export default MoviesCard;
