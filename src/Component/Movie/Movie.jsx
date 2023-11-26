import React from "react";
import * as MVS from "./Movie.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function Movie({ title, overview, poster_path, vote_average }) {
  return (
    <MVS.movieContainer>
      <MVS.overlay>
       <MVS.h4_title>{title}</MVS.h4_title>
        <MVS.overview>{overview}</MVS.overview>
      </MVS.overlay>
        <MVS.Image src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <MVS.movie_info>
        <MVS.h5_title>{title}</MVS.h5_title>
        <MVS.average>{vote_average}</MVS.average>
      </MVS.movie_info>
    </MVS.movieContainer>
    
  );
}