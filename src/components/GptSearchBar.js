import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[9%] flex justify-center  ">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-xl">
        <input
          type="text"
          className="p-4 m-4  col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
