import React from "react";
import {Container, Grid, Paper} from "@material-ui/core";
import clsx from "clsx";

import {useStyles} from "../App/styles";
import {AuthMethodDoughnut} from "../charts/doughnut/AuthMethodDoughnut/AuthMethodDoughnut";

export const About = () => {
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
        </Grid>
      </Container>
    </main>
  );
};