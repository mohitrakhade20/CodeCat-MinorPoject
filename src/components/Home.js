import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import online from '../assets/images/online_exam2.png';


const Home = () => (
    <Fragment>
        <Helmet><title>Home - CodeCat Quiz</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>CodeCat</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Start Test</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                </div>
            </section>
        </div>
            <img alt='Online Exam' src={online} style={{width:'250px',height:'250px','marginTop':'-279px'}}/>
    </Fragment>
);

export default Home;