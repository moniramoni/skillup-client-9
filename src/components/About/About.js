import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container">
                <Row className="about-row" xs={1} md={1} lg={2}>
                    <Col className="about">
                        <h3>About SkillUp</h3>
                        <h2>We are innovative educational institution for students.</h2>
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
                    </Col>
                </Row>       
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;