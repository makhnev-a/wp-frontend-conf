import React from "react";
import {Button, CardActions, CardContent, CardHeader, Grid, TextField, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 0.5,
    height: '100vh',
    overflow: 'auto',
  },
}));

export const StatisticsPage2 = () => {
  const classes = useStyles();

  const onFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.content}>
      <div className={classes.appBarSpacer}/>
      <Grid item xs={12} sm={12}>
        <form onSubmit={onFormHandler}>
          <CardHeader
            title='email test'
            subheader='sub email test'
          />
          <CardContent>
            <TextField
              label='email'
              fullWidth
              autoFocus
            />
            <TextField
              label='password'
              fullWidth
              type='password'
            />
            <TextField
              label='description'
              fullWidth
            />
          </CardContent>
          <CardActions>
            <Button
              type='submit'
              color='primary'
            >Submit</Button>
          </CardActions>
        </form>
      </Grid>
    </div>
  );
};