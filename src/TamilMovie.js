import React, { useEffect, useState } from 'react'
import './Tamil.css'
import{Container,Row,Col}from 'react-bootstrap'
import { Link } from 'react-router-dom'
const TamilMovie = () => {
    const[list,setList]=useState('')
    const[data,setData]=useState([])
    useEffect(()=>{
     fetch("http://localhost:8000/movieList")
     .then(res=>res.json())
     .then(res=>setData(res))
    },[])
  return (
    <div className='everything'>
       <div className="input">
       <input type="text" 
        placeholder='Enter Movie Name To Search'
        value={list}
        onChange={(e)=>setList(e.target.value)}
        />
        <button>Search</button>
       </div>
       <Container>
        <Row id='as'>
        {
        data.filter((data)=>{
            if(list=="")
            return data
        else if(data.title.toLowerCase().includes(list.toLowerCase()))
        return data
   
        })
        .map((data)=>(
            <Col md={4} id='col' key={data.id}>
            <div className="all" >
               
                <div className="img">
                    <Link to={`/post/${data.id}`}><img src={data.url} alt="" /></Link>
                    <div className="db">
                    <p>
                        {data.imdb}
                    </p>
                </div>
                </div>
                <div className="name">
                    <p>
                        {data.title}
                    </p>
                </div>
            </div>
            </Col>
        ))
       }
        </Row>
       </Container>
    </div>
  )
}

export default TamilMovie