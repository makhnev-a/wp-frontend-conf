import React, {useState} from "react";
import clsx from "clsx";
import {Container, Grid, Paper, Tab, Tabs} from "@material-ui/core";

import {useStyles} from '../App/styles';

import {AuthMethodDoughnut} from "../charts/doughnut/AuthMethodDoughnut/AuthMethodDoughnut";
import {AuthMethodLine} from '../charts/line/AuthMethodLine/AuthMethodLine';
import {AgeDoughnut} from "../charts/doughnut/AgeDoughnut/AgeDoughnut";
import {GenderDoughnut} from "../charts/doughnut/GenderDoughnut/GenderDoughnut";
import {OsDoughnut} from "../charts/doughnut/OsDoughnut/OsDoughnut";
import {CountryDoughnut} from "../charts/doughnut/CountryDoughnut/CountryDoughnut";
import {VisitorsLine} from "../charts/line/VisitorsLine/VisitorsLine";
import {WorkLoadBar} from "../charts/bar/WorkLoadBar/WorkLoadBar";

import {GenderBar} from "../charts/bar/GenderBar/GenderBar";
import {UsersActivity} from "../tables/UsersActivity/UsersActivity";

export const StatisticsPage = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer}/>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={12}>
            <Paper>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                variant={'fullWidth'}
              >
                <Tab label="Способ авторизации"/>
                <Tab label="Возраст"/>
                <Tab label="Выгрузка пользователей"/>
                <Tab label="Список точек подключения"/>
                <Tab label="Пол"/>
                <Tab label="Почасовая нагрузка"/>
                <Tab label="Страны"/>
              </Tabs>
            </Paper>

            <TabPanel value={value} index={0}>
              <main className={classes.content} style={{fontSize: '16px'}}>
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
                  </Grid>
                </Container>
              </main>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <main className={classes.content} style={{fontSize: '16px'}}>
                <Container maxWidth="xl" className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <AgeDoughnut/>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <VisitorsLine/>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <main className={classes.content} style={{fontSize: '16px'}}>
                <Container maxWidth="xl" className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                      <Paper>
                        <UsersActivity/>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            </TabPanel>
            <TabPanel value={value} index={3}>Список точек подключения</TabPanel>
            <TabPanel value={value} index={4}>
              <main className={classes.content} style={{fontSize: '16px'}}>
                <Container maxWidth="xl" className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <GenderDoughnut/>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <GenderBar/>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <main className={classes.content} style={{fontSize: '16px'}}>
                <Container maxWidth="xl" className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <WorkLoadBar/>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <main className={classes.content} style={{fontSize: '16px'}}>
                <Container maxWidth="xl" className={classes.container}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <OsDoughnut/>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                      <Paper className={fixedHeightPaper}>
                        <CountryDoughnut/>
                      </Paper>
                    </Grid>
                  </Grid>
                </Container>
              </main>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export const TabPanel = ({value, index, children}) => {
  return (
    <div>{value === index && <h1>{children}</h1>}</div>
  );
};