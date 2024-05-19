import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-20 blur-sm">
        <img className="" src={BG_URL} alt="background-img" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
