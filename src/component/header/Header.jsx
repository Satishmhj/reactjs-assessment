import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaHome } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { BsGraphDown } from "react-icons/bs";
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => {
                        navigate('/')
                    }}>Free Stock Exchange</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='d-flex align-items-center' onClick={() => {
                                navigate('/')
                            }} ><FaHome />&nbsp;Home</Nav.Link>
                            <Nav.Link className='d-flex align-items-center' onClick={() => {
                                navigate('/tables')
                            }} ><FaTable />&nbsp;Table</Nav.Link>
                            <Nav.Link className='d-flex align-items-center' onClick={() => {
                                navigate('/graph')
                            }}> <BsGraphDown />&nbsp;Graph</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header