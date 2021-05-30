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

export default function SignUp() {
  const classes = useStyles();
const [fname,setFname]=useState('');
const [lname,setLname]=useState('');
const [email,setEmail]=useState('');
const [pass,setPass]=useState('');
const history = useHistory();
const onSignup=(e)=>{
  e.preventDefault();
  console.log("Register data : ",fname,lname,email,pass);
  history.push("/play/instructions");
}
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
            <Grid item xs={12} sm={6}>
              <TextField
              InputProps={{ disableUnderline: true }}
               underlineStyle={{display: 'none'}}
                autoComplete="fname"
                name="firstName"
                value={fname}
                onChange={e=>setFname(e.target.value)}
                // variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                // variant="outlined"
                InputProps={{ disableUnderline: true }}
                underlineStyle={{display: 'none'}}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lname}
                onChange={e=>setLname(e.target.value)}
                autoComplete="lname"
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
                value={email}
                onChange={e=>setEmail(e.target.value)}
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
                value={pass}
                onChange={e=>setPass(e.target.value)}
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
            onClick={onSignup}
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