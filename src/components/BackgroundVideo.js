import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const BackgroundVideo = ({moviesId}) => {

  const trailerVideo= useSelector(store=>store.movies.trailerVideo);
  useMoviesTrailer(moviesId);
  
  return (
    <div className="pt-32 md:pt-0">
      <iframe
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?si=cweIwtlNtefoPDks?rel=0&autoplay=1&mute=1&loop=0&controls=0"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-screen aspect-video "
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
