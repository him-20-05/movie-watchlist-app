import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiBookmarkRemove } from "react-icons/ci";
import Navbar from './Navbar';
import "./Home.css";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(() => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  });

  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  const handleRemove = (imdbID) => {
    const updatedWatchlist = watchlist.filter(movie => movie.imdbID !== imdbID);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  useEffect(() => {
    if (watchlist.length === 0) {
      setRedirectToHome(true);
    }
  }, [watchlist]);

  useEffect(() => {
    if (redirectToHome) {
      navigate('/');
    }
  }, [redirectToHome, navigate]);

  return (
    <div className="d-flex">
      <Navbar />
      <div className="container mt-4 ">
        <h1 className='text-center text-danger'>Personal Watchlist</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {watchlist.map(movie => (
            <div className="col mb-3" key={movie.imdbID}>
              <div className="card h-100">
                <div className="icon-container">
                  <CiBookmarkRemove
                    className="bookmark-icon"
                    onClick={() => handleRemove(movie.imdbID)}
                  />
                </div>
                <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">Year: {movie.Year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
