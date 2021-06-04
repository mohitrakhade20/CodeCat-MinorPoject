import React,{useState} from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { signup, authenticate, isAutheticated } from "./auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        CodeCat GCOEA
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Reg() {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  });
  const { name,email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signup({name, email, password })
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
            });
        }
    })
};
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon/> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
              InputProps={{ disableUnderline: true }}
               underlineStyle={{display: 'none'}}
                autoComplete="name"
                name="name"
                onChange={handleChange("name")}
                value={name}
                // variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              InputProps={{ disableUnderline: true }}
              underlineStyle={{display: 'none'}}
                // variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange("email")}
                value={email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              InputProps={{ disableUnderline: true }}
              underlineStyle={{display: 'none'}}
                // variant="outlined"
                required
                fullWidth
                name="password"
                value={password}
                onChange={handleChange("password")}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          {/* <Link to="/play/instructions" className="auth-buttons" id="login-button"> */}
          <Button
            type="submit"
            onClick={onSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* </Link> */}
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" className="auth-buttons" id="login-button">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}