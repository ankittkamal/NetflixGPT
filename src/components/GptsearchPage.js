import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptsearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-auto "
          src={BG_URL}
          alt="background screen"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptsearchPage;
