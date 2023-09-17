import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchBarClick = async () => {
    // console.log(searchText.current.value);
    // Make open ai api call to get the movie result

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 4 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Koi Mil Gaya.";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    // console.log(gptResults.choices?.[0]?.message?.content);
    // List of Movies like : Inception, Sholay, Interstellar, Batman Begins, The Dark Knight, Dunkirk.

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // getMovies gives array of movies like : [Inception, Sholay, Interstellar, Batman Begins, The Dark Knight, Dunkirk.]
    // for each movie i will search the TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise,Promise,Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[9%] flex justify-center opacity-90">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4  col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchBarClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
