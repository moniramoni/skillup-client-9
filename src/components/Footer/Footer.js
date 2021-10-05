import React from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">            
            <Container>
                <Row xs={1} md={2} lg={4}>
                    <Col>
                        <img className="footer-logo" src="https://themezhub.net/skillup-demo/assets/img/logo.png" alt="" />
                        <p>We work with a passion of taking challenges and creating new ones in advertising sector</p>
                        <Button variant="primary">About</Button>{' '}
                    </Col>
                    <Col>
                        <h2>Newsletter</h2>
                        <hr className="hr"/ >
                        <p>Subscribe our newsletter to get our latest update & news</p>
                        <div className="">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-behance"></i>
                        </div>
                    </Col>
                    <Col>
                        <h2>Official Info</h2>
                        <hr className="hr"/>
                        <div className="contact">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>30 Commercial Road Fratton, Australia</p>
                        </div> 
                        <div className="call-info">
                            <i className="fas fa-phone"></i>
                            <p>0-999-666-0055</p>
                        </div> 
                        <h4>Open hours</h4>
                        <hr className="hr"/>
                        <p>Mon – Sat: 8 am – 5 pm, Sunday: CLOSED</p>     
                    </Col>
                    <Col>
                        <h2>Latest Gallery</h2>
                        <hr className="hr"/>
                        <Container className="image-gallery">
                            <Row xs={1} md={3} lg={3}>
                                <Col><img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2020/12/2960188-300x300.jpg" alt="" /></Col>
                                <Col><img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2020/12/12869-300x300.jpg" alt="" /></Col>
                                <Col><img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2020/12/13584-300x300.jpg" alt="" /></Col>
                            </Row>
                            <Row xs={1} md={3} lg={3}>
                                <Col><img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2020/12/13625-300x300.jpg" alt="" /></Col>
                                <Col><img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2020/12/13625-300x300.jpg" alt="" /></Col>
                                <Col><img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2020/12/14155-300x300.jpg" alt="" /></Col>
                            </Row>
                            </Container>
                    </Col>
                </Row>
            </Container>
            <hr />
            <h3 className="copyright">© 2021 SkillUp. All rights reserved.</h3>
        
        </div>
    );
};

export default Footer;