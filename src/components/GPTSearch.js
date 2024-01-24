import React from "react";
import GptSerachBar from "./GptSerachBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { APP_BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={APP_BG_IMG} alt="netflix-bg" />
      </div>
      <GptSerachBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
