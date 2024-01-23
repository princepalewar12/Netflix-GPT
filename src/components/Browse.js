import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      mainContainer
        - videoBackground
        - videoTitle
      secondaryContainer
        - MovieList * n
        - cards * n  
       */}
    </div>
  );
};

export default Browse;
