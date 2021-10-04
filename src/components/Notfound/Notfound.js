import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css';

const Notfound = () => {
    return (
        <div>
            <div className="notfound-container">
                <img src="https://www.argildx.com/wp-content/uploads/2017/06/Is-a-Misconfigured-%E2%80%9CPage-Not-Found%E2%80%9D-Jeopardizing-Your-Website.jpg" alt="" />
                <h2 className="notfound-message">WE'RE SORRY, THIS PAGE DOESN'T EXIST</h2>
                <Link to="/home"><Button className="signup-btn" variant="primary" className="btn">Do Back Home</Button>{' '} </Link>
            </div>
        </div>
    );
};

export default Notfound;