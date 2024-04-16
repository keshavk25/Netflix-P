const MoviesCard = ({moviesPath})=>{

    return (
        <div className="w-48 mx-1">
            <img src={"https://image.tmdb.org/t/p/w500/"+moviesPath}
            className="w-48 h-72"
            alt="" />
        </div>
    )
}

export default MoviesCard;
