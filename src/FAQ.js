import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <div>

        <Container className='mt-5'>
            <h2 className='bg-dark p-4 text-center'>
                Some Frequently Asked Questions 
            </h2>
        <Accordion>
      <Accordion.Item eventKey="0" className='mt-5'>
        <Accordion.Header className='fs-4'>
        What is Moviz
        </Accordion.Header>
        <Accordion.Body id='acc'>
        It is a platform where you can find in-depth movie reviews, ratings, and recommendations for a wide range of films. Our goal is to help you make informed decisions about what to watch.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1"className='mt-5'>
        <Accordion.Header id='acc'className='fs-4'>How do I search for movie reviews on Moviz</Accordion.Header>
        <Accordion.Body id='acc'>
        You can search for movie reviews by using the search bar on the homepage. Simply enter the movie title, and our website will provide you with relevant reviews.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2"className='mt-5 mb-5'>
        <Accordion.Header id='acc'className='fs-4'>Do you provide information about the movie's content, such as its rating, genre, and parental guidance</Accordion.Header>
        <Accordion.Body id='acc'>
        Yes, our movie reviews often include information about the film's genre, MPAA rating, and content advisories to help you decide if it's appropriate for your viewing preferences or family.     
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>

        </Container>
        
    </div>
  )
}

export default FAQ