import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  IconButton,
  Drawer,
} from "@material-ui/core";
import {
  Menu,
  Person,
  PeopleAlt,
  Language,
  NotificationsNone,
} from "@material-ui/icons";

import WorkoutSummary from "./WorkoutSummary";

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

  const handleDrawer = () => {
    setOpen(true);
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
        <div>
          <h3>This is a drawer</h3>
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
