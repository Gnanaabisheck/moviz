
import { Route, Routes } from "react-router-dom"

import Post from "./Post"
import TamilMovie from "./TamilMovie"
import Tamil from "./Tamil"
import English from "./English"
import Engmovies from "./Engmovies"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/post/:id"  element={<Post/>}/>
        <Route path="/tamilmovie" element={<TamilMovie/>}/>
        <Route path="/" element={<Tamil/>}/>        
        <Route path="/english" element={<English/>}/>        
        <Route path="/englishmov/:id" element={<Engmovies/>}/>        
      </Routes>
     
    </div>
  )
}

export default App