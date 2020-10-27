import React from "react";
import clsx from "clsx";
import {Box, Container, Grid, Paper} from "@material-ui/core";

import {AuthMethodDoughnut} from "../charts/doughnut/AuthMethodDoughnut/AuthMethodDoughnut";
import {AuthMethodLine} from '../charts/line/AuthMethodLine/AuthMethodLine';
import {UsersActivity} from '../tables/UsersActivity/UsersActivity';
import {Footer} from "../Footer/Footer";
import {useStyles} from "../App/styles";

export const Main = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer}/>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>
              <AuthMethodDoughnut/>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>
              <AuthMethodLine/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <UsersActivity/>
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Footer/>
        </Box>
      </Container>
    </main>
  );
};