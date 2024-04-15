import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

export default function Search() {
  const { query, setQuery, error, setError } = useGlobalContext();
  const [searchInput, setSearchInput] = useState(''); // Initialize with an empty string

  useEffect(() => {
    setSearchInput(''); // Reset searchInput when query changes
  }, [query]);

  const handleSearch = () => {
    if (searchInput.trim() === '') {
      // If search input is empty, show an error message
      setError({ show: true, msg: 'Please enter a movie title' });
      return;
    }
    setQuery(searchInput);
  };

  return (
    <div>
      <nav className="navbar bg-white">
        <form className="container-fluid" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search movie..."
              aria-describedby="basic-addon1"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
        <div className='card-error'>
          <p className='text-danger '>{error.show && error.msg}</p>
        </div>
      </nav>
    </div>
  );
}
