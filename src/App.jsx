

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookmark = blog =>{
   const newBookmarks = [...bookmarks, blog];
   setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id,time) =>{
    const newRadingTime = readingTime + time;
    setReadingTime(newRadingTime);
    // remove the read blog from bookmark
    // console.log("remove book marked", id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
  }

  return (
    <>
    <Header  />
     <main className='md:flex max-w-7xl mx-auto'>
       <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
      <Booksmarks bookmarks={bookmarks} readingTime={readingTime}  />
     </main>
      
     
    </>
  )
}

export default App
