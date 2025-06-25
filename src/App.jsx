

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

  return (
    <>
    <Header  />
     <main className='md:flex max-w-7xl mx-auto'>
       <Blogs handleAddToBookmark={handleAddToBookmark} />
      <Booksmarks bookmarks={bookmarks} />
     </main>
      
     
    </>
  )
}

export default App
