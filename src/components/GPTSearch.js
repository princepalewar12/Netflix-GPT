import React from "react";
import GptSerachBar from "./GptSerachBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { APP_BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="" src={APP_BG_IMG} alt="netflix-bg" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSerachBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
