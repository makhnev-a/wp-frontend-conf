import React from "react";
import {Badge, CssBaseline, Divider, Drawer, IconButton, List, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {mainListItems} from "../../components/App/listItems";
import {Redirect, Route, Switch} from "react-router-dom";
import {useStyles} from "../../components/App/styles";
import imgLogo from '../../assets/img/nbn_logo_lk2-1.png';
import {Main} from '../../components/Main/Main';
import {About} from '../../components/About/About';
import {SpotsPage} from '../../components/SpotsPage/SpotsPage';
import {SpotsItem} from '../../components/SpotsPage/SpotsPageItem/SpotsPageItem';
import {MonitoringPage} from "../../components/MonitoringPage/MonitoringPage";
import {StatisticsPage2} from "../../components/StatisticsPage/StatisticsPage";


export const MainPage = ({auth}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  if (auth === false) {
    return <Redirect to='/sign_in'/>
  }

  return (
    <>
      <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Рабочий стол
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <img src={imgLogo} alt="img" style={{filter: 'invert(1)', width: '150px'}}/>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon/>
            </IconButton>
          </div>
          <Divider/>
          <List>{mainListItems}</List>
          <Divider/>
        </Drawer>
        <Switch>
          <Route exact from='/' render={() => <Main/>}/>
          <Route exact from='/about' render={() => <About/>}/>
          <Route exact from='/monitoring' render={() => <MonitoringPage/>}/>
          <Route exact from='/statistics' render={() => <StatisticsPage2/>}/>
          <Route exact from='/spots' render={() => <SpotsPage/>}/>
          <Route exact from='/spots/:id/edit'
                 render={(props) => <SpotsItem {...props}/>}
          />
        </Switch>
      </div>
    </>
  );
};