import React, { useState } from "react";
// import Base from "../core/Base";
import { Redirect } from "react-router-dom";
import "./style-cus.css"
import { signin, authenticate, isAutheticated } from "./auth";
// import Example from "../core/Example";
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Sign = () => {
     const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then(data => {
          console.log("datda",data)
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
              setValues({
                  ...values,
                  didRedirect: true
                })
                if(didRedirect== 1) {window.location = "/play/instructions"} 
                // else { window.location="/"}
            });
        }
    })
};

  const signInForm = () => {
    return (
      <div className="row distance ">
        <div className="col-md-6 offset-sm-3 text-left topdistance">

             <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        </div>
          <form className="centerit">
            <div className="form-group">
              <label className="">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                placeholder="enter email "
                className="form-control"
                type="email"
              />
            </div>

            <div className="form-group">
              <label className="">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                placeholder="enter password"
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={onSubmit}  className="btnit btn btn-primary btn-block btndistance">
              Login 
            </button>
          </form>
          <div className="down">

              <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      CodeCat GCOEA
      {new Date().getFullYear()}
      {'.'}
    </Typography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {signInForm()}
</div>
  );
};

export default Sign;
