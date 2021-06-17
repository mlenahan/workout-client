import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Drawer,
  Divider,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import {
  Menu,
  Person,
  PeopleAlt,
  Language,
  NotificationsNone,
  Home,
  LibraryBooks,
  AccountCircle,
  InsertChart,
  FitnessCenter,
  ChevronLeft, 
  ChevronRight,
} from "@material-ui/icons";

import WorkoutSummary from "./WorkoutSummary";

const useStyles = makeStyles((theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
}));

const workouts = [
  {
    username: "Michael",
    workoutName: "Tuesday Afternoon Workout",
    date: "Feb 23",
  },
  {
    username: "John",
    workoutName: "Monday Morning Workout",
    date: "Jan 20",
  },
  {
    username: "Ronan",
    workoutName: "Sunday Morning Workout",
    date: "December 20",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawer = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar style={{ background: "#bd0841" }} position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <IconButton
              onClick={handleDrawer}
              color="inherit"
              edge="start"
              aria-label="menu"
            >
              <Menu />
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="account">
              <Person />
            </IconButton>
            <IconButton aria-label="feed">
              <PeopleAlt />
            </IconButton>
            <IconButton aria-label="worldwide">
              <Language />
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="notifications">
              <NotificationsNone />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
        <Divider/>
        <div>
        <List>
          {['Home', 'Training Programs', 'Analytics', 'Profile', 'Friends', 'Exercises'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                  {index === 0 && <Home/>}
                  {index === 1 && <LibraryBooks/>}
                  {index === 2 && <InsertChart/>}
                  {index === 3 && <AccountCircle/>}
                  {index === 4 && <PeopleAlt/>}
                  {index === 5 && <FitnessCenter/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </div>
      </Drawer>

      <List>
        {workouts.map((workout) => (
          <ListItem>
            <WorkoutSummary
              username={workout.username}
              workoutName={workout.workoutName}
              date={workout.date}
              key={workout.username + workout.workoutName + workout.date}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Navbar;
