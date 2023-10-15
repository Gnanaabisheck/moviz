import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaInnosoft } from "react-icons/fa";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form,FormControl, FormGroup, FormLabel } from 'react-bootstrap';
const Anchor = () => {
    
  const [show, setShow] = useState(false);
  const [sh, setSh] = useState(false);

  const handleClose = () => setShow(false);
  const handleCl = () => setSh(false);
  const handleShow = () => setShow(true);
  const handleSh = () => setSh(true);

  return (
    <div>
    <Navbar expand="md" className='bg-dark'>
      <Container fluid className='mt-2'>
        <FaInnosoft style={{fontSize:'60px'}}/><Navbar.Brand href='' className='fs-1 fw-bolder text-white'>Mo<span style={{color:'green'}}>viz</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end fs-5 fw-bold me-4">
          <Nav >
            <Nav.Link href="#" onClick={handleShow}className='m-3' id='lnk'>Login</Nav.Link>
            <Nav.Link href="#" onClick={handleSh} className='m-3' id='lnk'>Register</Nav.Link>
            <Nav.Link href="#" className='m-3' id='pl'>PLANS</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  {/* modals */}
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark fw-bold text-center'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form className='model'>
            <FormGroup>
                <FormControl placeholder='Enter Email' type='email' style={{borderColor:'green'}}></FormControl>
            </FormGroup>
            <br />
            <FormGroup>
                <FormControl placeholder='Enter Password' type='password' style={{borderColor:'green'}}></FormControl>
            </FormGroup>
            <br />
           
            <div className="button" style={{textAlign:'center'}}>
            <button className='btn btn-success'>
                Submit
            </button>
            </div>
           </Form>
        </Modal.Body>
      </Modal>
    </>
  <>
  {/* for register */}

  <Modal show={sh} onHide={handleCl} >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark fw-bold'>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form className='model'>
            <FormGroup>
                <FormControl placeholder='Enter Name' type='text' style={{borderColor:'green'}}></FormControl>
            </FormGroup>
            <br />
            <FormGroup>
                <FormControl placeholder='Enter Email' type='email' style={{borderColor:'green'}}></FormControl>
            </FormGroup>
            <br />
            <FormGroup>
                <FormControl placeholder='Enter Password' type='password' style={{borderColor:'green'}}></FormControl>
            </FormGroup>
            <br />
            <FormGroup>
                <FormControl placeholder='Re-Enter Password' type='password' style={{borderColor:'green'}}></FormControl>
            </FormGroup>
            <br />
            <FormGroup style={{display:'flex'}}>
            <input type="checkbox" className='me-3 '/>
            <FormLabel className='text-dark mt-2'>Agree to the Terms & Conditions </FormLabel>
            </FormGroup>
            <div className="button" style={{textAlign:'center'}}>
            <button className='btn btn-success mt-3'>
                Submit
            </button>
            </div>
           </Form>
        </Modal.Body>
      </Modal>
    </>
    </div>
  )
}

export default Anchor