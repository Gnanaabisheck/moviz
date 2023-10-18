import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Tamil.css'
import { Link } from 'react-router-dom'
import img from '../src/img/loading.gif'
const English = () => {
    const[movie,setMovie]=useState([])
    const[inp,setInp]=useState("")
    const[load,setLoad]=useState(false)
    useEffect(()=>{
      
      async function fetching(){
        setLoad(true)
        await fetch('https://backend-2ihb.onrender.com/movieList')
        .then(res=>res.json())
        .then(res=>setMovie(res))
        setLoad(false)
      }
      fetching()
       
        
    },[])
  return (
    <div>
          <div className="input">
          <input type="text" 
          placeholder='Enter Movie Name to Search'
          value={inp}
          onChange={(e)=>setInp(e.target.value)}
          />
         
            <button> Search </button>
          
          </div>
          <Container className='mt-5'>
          <Row>
            
            {
               load ? (<img src={img} style={{height:'100px',width:'100px',margin:'40px auto'}}/>): movie.filter((movie)=>{
                    if(inp=="")
                    return movie
                else if(movie.title.toLowerCase().includes(inp.toLowerCase()))
                return movie
                })

                .map((movie)=>
                <Col md={4} key={movie.id}>
               <div className="all">
                <div className="img">
                   <Link to={`/englishmov/${movie.id}`}> <img src={movie.url} alt="" /></Link>
                    <div className="db">
                    <p>{movie.imdb}</p>
                </div>
                </div>
                
                <div className="name">
                    <p>
                    {movie.title}
                    </p>
                </div>
               </div>
                </Col>
                )
            }
            
          </Row>
          </Container>
    </div>
  )
}

export default English