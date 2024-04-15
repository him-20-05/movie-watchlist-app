import React from 'react';
import { MdOutlineBookmarkAdd } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div>
        <p className='display-4'>Welcome to <span className='text-danger display-4'>Watchlist</span></p>
        <p className='text-center'>Browse movie and share them with your friends by clicking <MdOutlineBookmarkAdd className="bookmark-icon" /> icon. Also you can search your favorite movie and add to their watchlist.</p>
        
      </div>
    </div>
  );
}
