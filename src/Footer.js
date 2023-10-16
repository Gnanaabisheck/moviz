import React from 'react'
import { Container } from 'react-bootstrap'
import { FaFacebookSquare, FaGooglePlay, FaInstagramSquare, } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
       <Container>
       <h3 className='text-center my-4'>
            Connect with us on 
        </h3>
        <div className="ic my-4">
        
        <FaFacebookSquare/>
        <FaGooglePlay/>
        <FaInstagramSquare/>
        </div>
       </Container>

    </div>
  )
}

export default Footer