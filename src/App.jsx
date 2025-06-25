

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddToBookmark = blog =>{
    console.log("book marks adding soon");
  }

  return (
    <>
    <Header  />
     <main className='md:flex max-w-7xl mx-auto'>
       <Blogs handleAddToBookmark={handleAddToBookmark} />
      <Booksmarks />
     </main>
      
     
    </>
  )
}

export default App
