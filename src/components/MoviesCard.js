import { Movie_Poster_URL } from "../utils/constant";

const MoviesCard = ({moviesPath})=>{

    return (
        <div className="w-48 mr-4 rounded-sm">
            <img src={Movie_Poster_URL+moviesPath}
            className="w-48 h-72 rounded-sm"
            alt="" />
        </div>
    )
}

export default MoviesCard;
