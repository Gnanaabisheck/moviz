
import { Col, Container, Image, Row} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import img from '../src/img/img.png'
import { useParams } from 'react-router-dom'
const Engmovies = () => {
    const{id}=useParams()

    const[movie,setMovie]=useState([])
    useEffect(()=>{
        fetch(`https://backend-2ihb.onrender.com/movieList/${id}`)
        .then(res=>res.json())
        .then(res=>setMovie(res))})

        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
         
          const[name,setName]=useState('')
    const[list,setList]=useState([])
   function handleClick(){
    if(name=="")
    {
      alert("The Comment Section Cant't Be Empty")
    }
  else
    {
      const data= name
    setList((lnk)=>([...lnk,data]))
    setName("")
    }
   }
   const date=new Date 

  return (
    <div>
        <div className="every">
       <Container className='mt-5'>
        <Row>
          <Col md={4} >
                <Image src={movie.url} style={{display:'block', margin:'auto',borderRadius:'20px'}}/>
          </Col>
          <Col md={8} className='mt-4'>
           <table border={2}>
            <tbody>
            <tr>
              <td>
                Movie Name 
              </td>
              <td>
                {movie.title}
              </td>
            </tr>
            <tr>
              <td>
                IMDB Rating
              </td>
              <td>
                {movie.imdb}
              </td>
            </tr>
            <tr>
              <td>
                Cast & crew 
              </td>
              <td>
                {movie.cast}
              </td>
            </tr>
            <tr>
              <td>
                Director
              </td>
              <td>
                {movie.dir}
              </td>
            </tr>
            </tbody>
           </table>
          </Col>
        </Row>
       </Container>
      <Container className='mt-5'>
      <h3>
              Story Plot :
            </h3>
             <p style={{lineHeight:'40px',textAlign:'justify',fontSize:'18px',textIndent:'30px'}}>
              {movie.plot}
               </p>
      </Container>
      <Container>
      <Container className='cmt'>
        <h2 className='text-center'>
          Write your Comments here
        </h2>
    <div className="input">
    <input type="text" 
         value={name}
         onChange={(e)=>setName(e.target.value)}
         placeholder='Enter Comments'
        />
        <button onClick={handleClick}>Post</button>
    </div>
      

       {list.map((item,i)=>(
        <li key={i} style={{listStyle:'none'}}>
          <div className="comm">
         <div className="us">
         <img src={img} alt="" style={{height:'40px',width:"40px"}}/> <p>{item}</p>
         </div>
           <br />
         <p id='dte'> {`${date.getDate()}/${date.getDay()}/${date.getFullYear()}`}</p>
          
          </div>
          <hr />
        </li>
       ))}
      </Container>
      </Container>
      <Container id='img'>
        <h2 className='text-center my-4'>
          UPCOMMING MOVIES
        </h2>
      <Carousel responsive={responsive}>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1688592653442-xp32d3sINTp37BV2IJC6fRDxPea.jpg?tr=h-260,w-175,q-60&version=5' fluid/>
      </div>
     <div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1685388052446-vTQIqlxUkOuyf2UKhlM2OUaFGKz.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1687390320965-5M02PvRFFh9n3XdriuTaKdtZL9b.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1684190168501-2pK1tZ2eKmh10ybEg8847WE9h9n.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1694025813114-wgelpZG1TRW2AxvGyfYnnXAjz1M.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1683647612458-moXOK5tok3CAmcQ1rjbK6DoqVFY.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1692858911657-g0afWWFS8YYt59LFG2fonzMKJqq.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1694198861819-2rl04pRCaGfz91lwfWdDQmOiGJp.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1683750981342-ikzUPmlVtb7xQAcfChzmVTevwAz.jpg?tr=h-260,w-175,q-60&version=5'fluid/>
      </div>
</Carousel>
      </Container>
     
       
    </div>
           
        
    </div>
  )
}

export default Engmovies