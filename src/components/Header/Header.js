import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const activemenu={
        color: "#03b97c"
    }

    return (
        <div className="navbar-container">
            <Container>
                <Row xs={1} md={2} lg={3}>
                    <Col>
                        <img className="footer-logo" src="https://themezhub.net/skillup-demo/assets/img/logo.png" alt="" />
                        
                    </Col>
                    <Col>
                        <nav>
                            <NavLink activeStyle={activemenu} to="/home" className="menu">Home</NavLink>
                            <NavLink activeStyle={activemenu} to="/courses" className="menu">Courses</NavLink>
                            <NavLink activeStyle={activemenu} to="/about" className="menu">About</NavLink> 
                            <NavLink activeStyle={activemenu} to="/contact" className="menu">Contact</NavLink>
                        </nav>
                    </Col>
                    <Col>
                        <Button variant="primary" className="btn">Sign In</Button>{' '}     
                        <Button variant="primary" className="btn">Get Started</Button>{' '}     
                    </Col>
                </Row>
            </Container>
            <div className="banner-container">
            <Row xs={1} md={1} lg={1}>
                    <Col>
                        <h2>Find The Most Exciting Online Cources</h2>
                        <p>We have helped over 3,400 new students to get into the most popular tech teams.</p> 
                        <div className="newsletter">  
                            <input
                                className="footer-input"
                                type="text"
                                placeholder="Enter Email"
                            /> 
                            <Button className="signup-btn" variant="primary" className="btn">Sign Up</Button>{' '}
                        </div>  
                    </Col>
                </Row>               
            </div>
        </div>
        
    );
};

export default Header;