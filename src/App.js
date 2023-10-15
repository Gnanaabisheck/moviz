
import { Route, Routes } from "react-router-dom"

import Post from "./Post"
import TamilMovie from "./TamilMovie"
import Tamil from "./Tamil"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/post/:id"  element={<Post/>}/>
        <Route path="/tamil/tamilmovie" element={<TamilMovie/>}/>
        <Route path="/" element={<Tamil/>}/>        
      </Routes>
     
    </div>
  )
}

export default App