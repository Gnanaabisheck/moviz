import React, { useEffect, useState } from 'react'
import './Tamil.css'
import img from '../src/img/loading.gif'
import{Container,Row,Col}from 'react-bootstrap'
import { Link } from 'react-router-dom'
const TamilMovie = () => {
    const[list,setList]=useState('')
    const[data,setData]=useState([])
    const[load,setLoad]=useState(false)
    useEffect(()=>{

     async function fetching(){
        setLoad(true)
        await fetch("https://tamil-la7t.onrender.com/movieList")
     .then(res=>res.json())
     .then(res=>setData(res))
     setLoad(false)
     }
     fetching()

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
         load ?(<img src={img} style={{height:'100px',width:'100px',margin:'50px auto'}}/>): data.filter
         ((data)=>{
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