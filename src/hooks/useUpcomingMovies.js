import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/constants";

const useUpcomingMovies = () => {
  //fetch tmdb api and update store

  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
