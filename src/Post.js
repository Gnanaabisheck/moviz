
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Post = () => {
  const{id}=useParams()

  const[data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8000/movieList/${id}`)
        .then(res=>res.json())
        .then(res=>setData(res))
    })

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
   
    
  return (
    <div className="every">
       
       
       <Container className='mt-5'>
        <Row>
          <Col md={4} key={data.id}>
                <Image src={data.url} style={{display:'block', margin:'auto',borderRadius:'20px'}}/>
          </Col>
          <Col md={8} className='mt-4'>
           <table border={2}>
            <tbody>
            <tr>
              <td>
                Movie Name 
              </td>
              <td>
                {data.title}
              </td>
            </tr>
            <tr>
              <td>
                IMDB Rating
              </td>
              <td>
                {data.imdb}
              </td>
            </tr>
            <tr>
              <td>
                Cast & crew 
              </td>
              <td>
                {data.cast}
              </td>
            </tr>
            <tr>
              <td>
                Director
              </td>
              <td>
                {data.dir}
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
              {data.plot}
               </p>
      </Container>
      <Container id='img'>
        <h2 className='text-center my-4'>
          UPCOMMING MOVIES
        </h2>
      <Carousel responsive={responsive}>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1695260939784-3xz1lfMrFlNtZ4H8DQKvYog8ilR.jpg?tr=h-350,q-40&version=5' fluid/>
      </div>
     <div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1688238322106-tGk1pKoWsNgVHb1k7Rr59Hph9Hh.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1687254849546-pBRkO5GHJqDB9D0fbumL5235JfJ.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1689633116842-x6AiOhbrYhsAvo8onRqXbOo4kOd.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1686036523589-o7A1agEoXvwyyOmIbHnUhfnC34j.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1687221182059-774UV1aCURb4s4JfEFg3IEMu5Zj.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1687365411904-y0ijMJ7lVYGUM67dO4m4yykpZik.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1687341961048-zO4mfRXYwuOYSy4YoXGVxh3oz1p.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
      <div>
        <Image src='https://www.91-cdn.com/metareel-images/content/posters-7-1687313809923-zb9QBUn5AZzoKCS2jsnhp6ySSGp.jpg?tr=h-350,q-40&version=5'fluid/>
      </div>
</Carousel>
      </Container>
     
       
    </div>
  )
}

export default Post