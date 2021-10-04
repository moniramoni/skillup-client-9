import React, { useEffect, useState } from 'react';
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
            <h2>Home = {bestcourse.length}</h2>
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