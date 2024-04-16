import React from "react";
import { useGlobalContext } from "./context";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default function Movies() {
  const imgUrl = "https://via.placeholder.com/200/200";
  const { movie, isLoading } = useGlobalContext();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("loggedIn");

  const handleAddToWatchlist = (currMovie) => {
    const existingWatchlist =
      JSON.parse(localStorage.getItem("watchlist")) || [];

    if (isLoggedIn) {
      let updatedWatchlist;
      if (existingWatchlist.length === 0) {
        updatedWatchlist = [];
      } else {
        updatedWatchlist = [...existingWatchlist];
      }

      updatedWatchlist.push(currMovie);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      navigate("/watchlist");
    } else {
      navigate("/login");
    }
  };

  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {movie.map((currMovie) => {
          const { imdbID, Title, Poster, Year } = currMovie;
          return (
            <div className="col" key={imdbID}>
              <div className="card h-100">
                <div
                  className="icon-container"
                  onClick={() => handleAddToWatchlist(currMovie)}
                >
                  <MdOutlineBookmarkAdd className="bookmark-icon" />
                </div>
                <img
                  className="card-img-top"
                  src={Poster === "N/A" ? imgUrl : Poster}
                  alt="#"
                />
                <div className="card-body">
                  <h5 className="card-title">{Title}</h5>
                  <p className="card-text">Year: {Year}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

