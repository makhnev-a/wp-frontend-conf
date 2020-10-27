import React from "react";
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {useStyles} from "../App/styles";
import clsx from "clsx";
import {SpotsList} from "../tables/SpotsList/SpotsList";

export const SpotsPage = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer}/>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={fixedHeightPaper}>
              <SpotsList/>
            </Paper>
          </Grid>
        </Grid>
        {/*<Box pt={4}>*/}
        {/*  <Footer/>*/}
        {/*</Box>*/}
      </Container>
    </main>
  );
};