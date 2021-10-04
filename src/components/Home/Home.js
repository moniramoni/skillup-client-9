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
                    <i className="fab fa-accusoft"></i>
                    <h3>Web Development</h3>
                    <p>18 Courses</p>
                </Col>
                <Col className="course">
                    <i className="fab fa-wordpress-simple"></i>
                    <h3>WordPress Development</h3>
                    <p>15 Courses</p>
                </Col>
                <Col className="course">
                    <i className="fas fa-database"></i>
                    <h3>Backend Development</h3>
                    <p>12 Courses</p>
                </Col>
                <Col className="course">
                    <i className="fas fa-laptop-code"></i>
                    <h3>Software Development</h3>
                    <p>6 Courses</p>
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