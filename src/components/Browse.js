import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../custom-hooks/usePopularMovies";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom-hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
