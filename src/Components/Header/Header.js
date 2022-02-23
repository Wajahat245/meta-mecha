import React from 'react';
import './Header.css';
import logo from '../../Images/Logo.png';
import discord from '../../Images/discord.png';
import twitter from '../../Images/twitter.png';
import insta from '../../Images/insta.png';
import opensea from '../../Images/opensea.png';
import { Row, Col, Container, Navbar, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
const Header = () => {
    return (
        <Navbar bg="transparent" expand={false}>
            <Container fluid>
                <Navbar.Brand href="https://facebook.com/" style={{
                    width: "10%"
                }}><img style={{
                    width: "179px",height: "68px"
                }} src={logo}></img></Navbar.Brand>
                <div className='social_icons'>
                    <img style ={{width: "42px",height: "31px"}} src={discord}></img>
                    <img style ={{width: "42px",height: "31px"}} src={twitter}></img>
                    <img style ={{width: "42px",height: "31px"}} src={insta}></img>
                    <img style ={{width: "42px",height: "31px"}} src={opensea}></img>
                </div>

                <Navbar.Toggle color='white' aria-controls="offcanvasNavbar"></Navbar.Toggle>

                <Navbar.Offcanvas
                    style={{ width: "31%", backgroundColor: "black" }}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"


                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" style={{color:"white"}}>META MECHAS</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-0.1 pe-3 navlinks" >
                            <Nav.Link  href="#">Lore</Nav.Link>
                            <Nav.Link href="#">Journey</Nav.Link>
                            <Nav.Link href="#">Specs</Nav.Link>
                            <Nav.Link href="#">Mint</Nav.Link>
                            <Nav.Link href="#">Traits</Nav.Link>
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>


                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
export default Header
