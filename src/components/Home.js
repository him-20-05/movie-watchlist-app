import React from 'react'
import Navbar from './Navbar'
import "./Home.css"
import Search from './Search'
import Movies from './Movies'
import Header from './Header'



export default function Home() {
  

  return (
    <>
    <div className='homepage'>
       <div className='sidebar'>
         <div>
           <Navbar>

           </Navbar>
         </div>
       </div>
       <div  className='watchlistScreen'>
          <div className='header'> <Header/> </div>
          <div className='search-bar'> <Search></Search> </div>
          <div className='movies'>
            <Movies></Movies>
          </div>
          
       </div>
      </div>
    </>
  )
}
