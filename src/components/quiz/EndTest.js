import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function EndTest() {
return(
<div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h3>Thanks for using CodeCat !</h3>
                    <section style={{display:'flex',justifyContent:'center'}}>
                    {/* <Link to ="/play/quiz">
                    <Button variant="outlined" color="secondary" href="#outlined-buttons" style={{marginRight:'9px'}}>
                     Play Again
                    </Button>
                    </Link> */}
                    <Link to ="/">
                    <Button variant="outlined" color="secondary" href="#outlined-buttons">
                    Back to Home
                    </Button>
                    </Link>
                    </section>
</div>
)}
export default EndTest;