import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Anchor from './Anchor'
import Car from './Car'
import Plan from './Plan'
import FAQ from './FAQ'
import Upt from './Upt'
import Footer from './Footer'


const Tamil = () => {
  return (
    <div>
       <Anchor/>
     <Car/>
    
        <Container className='mov'>
          
          <h2 className='text-center bg-dark p-4 my-5 text-capitalize'>
            What are all the <span style={{color:'green'}}>services Available</span>
          </h2>
          <Row>
            <Col md={6}>
            <h2>
            Tamil Movies
          </h2>
            <Link to='/tamilmovie'>
        <Image src='https://i.redd.it/some-really-great-tamil-movie-posters-drop-what-yall-think-v0-ch1d4xizu7xa1.jpg?width=443&format=pjpg&auto=webp&s=fe2b694dc9566d10f40e905ea89fd40396ebe530' fluid/>
        </Link>
            </Col>

            <Col md={6}>
            <h2>
            Hollywood Movies
          </h2>
          <Link to={`/english`}> <Image src='https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg' fluid/></Link>
            </Col>
          </Row>
        </Container>
        <Plan/>
        <FAQ/>
        <Upt/>
        <hr />
        <Footer/>
       
    </div> 
  )
}

export default Tamil