import React from "react";
import {Container} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Monitoring} from "../tables/Monitoring/Monitoring";

import {useStyles} from "../App/styles";

export const MonitoringPage = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container
          maxWidth="xl"
          className={classes.container}
        >
          <Grid
            container
            spacing={2}
            xs={12} md={12} lg={12}
          >
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.paper}>
                <h1>Monitoring page</h1>
                <Monitoring/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};