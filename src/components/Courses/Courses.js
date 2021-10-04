import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([])
    console.log(courses)

    useEffect( () => {
        fetch('./courses.JSON')
        .then(res=> res.json())
        .then(data => setCourses(data))
      }, [])

    return (
        <div>
            <div>
            <h5>Browse All Courses</h5>
            </div>
            <div className="courses-container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;