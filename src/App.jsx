

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Booksmarks from './Components/Bookmarks/Bookmarks'

function App() {


  return (
    <>
    <Header />
     <main className='md:flex'>
       <Blogs />
      <Booksmarks />
     </main>
      
     
    </>
  )
}

export default App
