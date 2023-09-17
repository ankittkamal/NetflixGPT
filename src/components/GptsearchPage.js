import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptsearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="background screen" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptsearchPage;
