import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
            <Row xs={1} md={2} lg={3}>
                <Col className="email">
                    <div>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                        <h3>Email Address</h3>
                        <p>moniinfo60@gmail.com</p>
                    </div>
                </Col>
                <Col className="email">
                    <div>
                        <i className="call fas fa-phone"></i>
                    </div>
                    <div>
                        <h3>Phone Number</h3>
                        <p>1-888-452-1505 <br></br>1-888-452-1340</p>
                    </div>
                </Col>
                <Col className="email">
                    <div>
                        <i className="location fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <h3>Our Location</h3>
                        <p>30 Commercial Road <br></br>Fratton, Australia</p>
                    </div>
                </Col>
                </Row>
                <Row className="contact" xs={1} md={1} lg={2}>
                    <Col className="about">
                        <h3>SkillUp Mission</h3>
                        <h2>Achieve your Goals with Educal.</h2>
                        <p className="text"> 
                            SkillUp was founded by Monira Moni in 2016 with a vision of providing life-transforming learning experiences to learners around the world.
                            <br></br><br></br>
                            We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.
                            <br></br>
                            SkillUp is the global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class institute.
                        </p>
                        <div className="company-value">
                           <Row>
                            <Col>
                                <i className="contact-icon fab fa-facebook"></i>
                                <i className="contact-icon fab fa-youtube"></i>
                                <i className="contact-icon fab fa-twitter"></i>
                            </Col>
                           </Row>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://wp.themexriver.com/yle/wp-content/uploads/sites/4/2021/05/abn.png" alt="" />
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;