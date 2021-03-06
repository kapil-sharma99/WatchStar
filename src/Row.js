import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, ifLargeRow }) {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // "https://developers.google.com/youtube/player_parameters" 
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>

      {/*container*/}
      <div className="row_posters">
        {/* several row_posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${ifLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              ifLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
        {trailerUrl &&  <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;