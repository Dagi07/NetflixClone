import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let search_trailer_byTitle = movieTrailer(
        movie.title || movie?.name || movie.original_name
      )
        .then((dag) => {
          let urlParams = new URLSearchParams(new URL(dag).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
  };
  console.log(trailerUrl);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            // key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
