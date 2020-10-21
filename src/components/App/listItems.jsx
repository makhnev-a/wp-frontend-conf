import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import ComputerIcon from '@material-ui/icons/Computer';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import {MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";

export const mainListItems = (
  <div>
    {/*<NavLink to={'/'} style={{textDecoration: 'none', color: '#721A81'}}>*/}
    <ListItem button>
      <ListItemIcon>
        <SearchIcon/>
      </ListItemIcon>
      <Select
        style={{width: '100%'}}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={10}
      >
        <MenuItem value={10}>17777777</MenuItem>
        <MenuItem value={20}>18888888</MenuItem>
        <MenuItem value={30}>19999999</MenuItem>
      </Select>
    </ListItem>
    {/*</NavLink>*/}
    <NavLink to='/' style={{textDecoration: 'none', color: '#721A81'}}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Рабочий стол"/>
      </ListItem>
    </NavLink>
    <NavLink to={'/statistics'} style={{textDecoration: 'none', color: '#721A81'}}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Статистика"/>
      </ListItem>
    </NavLink>
    <NavLink to={'/spots'} style={{textDecoration: 'none', color: '#721A81'}}>
      <ListItem button>
        <ListItemIcon>
          <SettingsRemoteIcon/>
        </ListItemIcon>
        <ListItemText primary="Точки подключения"/>
      </ListItem>
    </NavLink>
    <NavLink to={'/monitoring'} style={{textDecoration: 'none', color: '#721A81'}}>
      <ListItem button>
        <ListItemIcon>
          <ComputerIcon/>
        </ListItemIcon>
        <ListItemText primary="Мониторинг"/>
      </ListItem>
    </NavLink>
  </div>
);

// Второй список мб пригодится позже
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Current month"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Last quarter"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Year-end sale"/>
    </ListItem>
  </div>
);