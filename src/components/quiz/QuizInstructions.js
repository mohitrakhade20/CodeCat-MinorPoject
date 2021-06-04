import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - CodeCat</title></Helmet>
        <div className="instructions container">
            <h1> CodeCat Test Instructions</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
                <li>Test has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Test consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    <img src={options} alt="Quiz App options example" />
                </li>
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    <img src={answer} alt="Quiz App answer example" />
                </li>
                <li>You can quit the test at any time. In that case your score will be revealed afterwards.</li>
            <div style={{padding:'20px'}}>
                {/* <span className="left"><Link to="/">No take me back</Link></span> */}
                {/* <span className="right"><Link to="/play/quiz">Okay, Let's do this!</Link></span> */}
                <Link to="/">
                <Button variant="outlined" color="primary" className="left">
                 Back
                </Button>
                </Link>
                <Link to="/play/quiz">
                <Button variant="outlined" color="primary" className="right">
                 Start Test
                </Button>
                </Link>
            </div>
            </ul>
        </div>
    </Fragment>
);

export default QuizInstructions;