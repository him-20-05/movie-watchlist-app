import React, { useState } from 'react';
import { useGlobalContext } from './context';

export default function Search() {
  const {  setQuery, error, setError } = useGlobalContext();
  const [searchInput, setSearchInput] = useState('');

 

  const handleSearch = () => {
    if (searchInput.trim() === '') {
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
              className="btn btn-outline-danger"
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
