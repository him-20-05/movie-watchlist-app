import React from 'react'
import Navbar from './Navbar'

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
       <div  className='watchlistSceen'>
        {/* create watch list component  */}
          <div> Watch list header </div>
          <div> Watch list seatch</div>
          <div> Watch list scrollable list</div>
       </div>
      </div>
    </>
  )
}
