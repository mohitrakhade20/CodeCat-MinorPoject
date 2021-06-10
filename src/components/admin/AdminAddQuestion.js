import { Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function AdminAddQuestion() {
  const classes = useStyles();
  const [inputList, setInputList] = useState([{ ques: ""}]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { ques: ""}]);
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}><a href="">Create Test</a></h3>
      {inputList.map((x, i) => {
        return (
          <Container component="main" maxWidth="sm">
         <Grid container spacing={3}>
          <Grid item xs={12}>
          <TextField
              InputProps={{ disableUnderline: true }}
               underlineStyle={{display: 'none'}}
                autoComplete="ques"
                name="ques"
                onChange={e => handleInputChange(e, i)}
                value={x.ques}
                // variant="outlined"
                required
                fullWidth
                id="ques"
                label="Enter new question"
                autoFocus
              />
          </Grid>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              {inputList.length !== 1 && 
                <Button style={{maxWidth: '66px', maxHeight: '26px', minWidth: '30px', minHeight: '30px'}}
                type="submit"
                onClick={() => handleRemoveClick(i)}
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >Remove</Button>
                }
                </Grid>
            <Grid item>
              {inputList.length - 1 === i && 
                <Button style={{maxWidth: '64px', maxHeight: '26px', minWidth: '30px', minHeight: '30px'}}
                type="submit"
                onClick={() => handleAddClick(i)}
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >Add</Button>
              }
            </Grid></Grid>
            <Button style={{maxWidth: '64px', maxHeight: '26px', minWidth: '30px', minHeight: '30px'}}
                type="submit"
                onClick={() => handleAddClick(i)}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >Submit</Button>
            </Grid>
          </Container>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}

export default AdminAddQuestion;