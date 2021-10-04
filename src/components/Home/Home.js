import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
    const [bestcourse, setBestourse] = useState([])
    console.log(bestcourse)

    useEffect( () => {
        fetch('./bestcourse.JSON')
        .then(res=> res.json())
        .then(data => setBestourse(data))
      }, [])
    return (
        <div>
            <div className="course-overview-container">
                <div className="course-overview">
                <Row xs={1} md={2} lg={4}>
                <Col className="course">
                    <i className="fas fa-envelope"></i>
                    <h3>Web Development</h3>
                    <p>moniinfo60@gmail.com</p>
                </Col>
                <Col className="course">
                    <i className="fas fa-envelope"></i>
                    <h3>WordPress Development</h3>
                    <p>moniinfo60@gmail.com</p>
                </Col>
                <Col className="course">
                    <i className="fas fa-envelope"></i>
                    <h3>Backend Development</h3>
                    <p>moniinfo60@gmail.com</p>
                </Col>
                <Col className="course">
                    <i className="fas fa-envelope"></i>
                    <h3>Software Development</h3>
                    <p>moniinfo60@gmail.com</p>
                </Col>
                </Row>
                </div>
            </div>
            <div>
                <h5>Best Seller courses</h5>
            </div>
            <div className="courses-container">
                {
                    bestcourse.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;