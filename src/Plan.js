import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

const Plan = () => {
  return (
    <div>
        <Container className='mt-5' >
            <h2 className='text-center mt-5 mb-4 bg-dark p-4'>
                Our Plans For <span style={{color:'green'}}>Our Customers</span>
            </h2>
                <Row>
                    <Col md={4}>
                         <div className="card">
                            <h2>
                               Basic Plan
                            </h2>
                            <h2>
                                $30/Mo
                            </h2>
                            <ul>
                                <li>
                                <FaStar id='icon'/>Cost-Effective
                                </li>
                                <li>
                                <FaStar id='icon'/>Unlimited Content Access
                                </li>
                                <li>
                                <FaStar id='icon'/>  Standard Definition
                                </li>
                                <li>
                                <FaStar id='icon'/>One Device at a Time
                                </li>
                                <li>
                                <FaStar id='icon'/> No Additional Features
                                </li>
                                <li>
                                <FaStar id='icon'/>No Commitment
                                </li>
                            </ul>
                            <div className="button">
                                <button className="btn">
                                    Buy Now
                                </button>
                            </div>
                         </div>
                    </Col>
                    <Col md={4}>
                    <div className="card">
                            <h2>
                               Premium Plan
                            </h2>
                            <h2>
                                $80/Mo
                            </h2>
                            <ul>
                                <li>
                                <FaStar id='icon'/>Simultaneous Streaming
                                </li>
                                <li>
                                <FaStar id='icon'/>Ultra High Definition 
                                </li>
                                <li>
                                <FaStar id='icon'/>High Dynamic Range  
                                </li>
                                <li>
                                <FaStar id='icon'/>Access to All Content
                                </li>
                                <li>
                                <FaStar id='icon'/>Profile Creation
                                </li>
                                <li>
                                <FaStar id='icon'/>Mobile and Tablet Streaming
                                </li>
                                <li>
                                <FaStar id='icon'/>Offline Downloads
                                </li>
                                <li>
                                <FaStar id='icon'/>No Advertisements
                                </li>
                            </ul>
                            <div className="button">
                                <button className="btn">
                                    Buy Now
                                </button>
                            </div>
                         </div>
                    </Col>
                    <Col md={4}>
                    <div className="card">
                            <h2>
                               Standrad Plan
                            </h2>
                            <h2>
                                $50/Mo
                            </h2>
                            <ul>
                                <li>
                                <FaStar id='icon'/>Simultaneous Streaming
                                </li>
                                <li>
                                <FaStar id='icon'/>Access to All Content
                                </li>
                                <li>
                                <FaStar id='icon'/>Profile Creation
                                </li>
                                <li>
                                <FaStar id='icon'/>Standard Plan Price
                                </li>
                                <li>
                                <FaStar id='icon'/>Mobile Devices
                                </li>
                                <li>
                                <FaStar id='icon'/>HD Streaming
                                </li>
                            </ul>
                            <div className="button">
                                <button className="btn">
                                    Buy Now
                                </button>
                            </div>
                         </div>
                    </Col>

                   
                </Row>
        </Container>
    </div>
  )
}

export default Plan