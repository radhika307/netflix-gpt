import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/slice/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailors = useSelector((store) => store.movies.movieTrailors);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !movieTrailors && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
