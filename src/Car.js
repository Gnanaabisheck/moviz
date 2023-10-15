import React from 'react'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Car = () => {

  

  return (
    <div>
        

       

<Container className='mt-5' fluid>
    
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://getwallpapers.com/wallpaper/full/d/1/c/1267897-gorgerous-movie-poster-wallpaper-1920x1200-for-iphone-7.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://getwallpapers.com/wallpaper/full/d/f/9/1267890-best-movie-poster-wallpaper-2500x1406-for-ios.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://getwallpapers.com/wallpaper/full/4/b/1/1267878-widescreen-movie-poster-wallpaper-3840x2160-for-android-40.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://getwallpapers.com/wallpaper/full/f/9/1/1267929-popular-movie-poster-wallpaper-2000x1333.jpg"
          alt="Forth slide"
        />
       
      </Carousel.Item>
    </Carousel>
  

    </Container>  

    </div>
  )
}

export default Car