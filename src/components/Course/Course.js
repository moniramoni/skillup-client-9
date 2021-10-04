import React from 'react';
import './Course.css';

const Course = (props) => {
    const{courseName, img, courseLink, instructorImg, instructorName, lession, price, review, star, student, }=props.course
    return (
        <div>
            <div className="courses">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="enrolled">
                    <div className="lession">
                        <div><i className="fas fa-file-video"></i></div>
                        <div><p>{lession} Lesson</p></div>
                    </div>
                    <div className="student">
                        <div><i className="far fa-user"></i></div>
                        <div><p>{student} Students</p></div>
                    </div>
                </div>
                <h2>{courseName}</h2>
                <p className="rating">Rating:{star} ({review})</p>
                <hr />
                <div className="info-price">
                    <div className="instructor-info">
                        <img src={instructorImg} alt="" />
                        <h4>{instructorName}</h4>
                    </div>
                    <a href={courseLink}>
                        <div className="price">
                            <div className="cart"><i className="fas fa-cart-arrow-down"></i></div>
                            <div><h4>${price}</h4></div>  
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Course;