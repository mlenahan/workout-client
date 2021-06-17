import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ThumbUp } from "@material-ui/icons";
import image from "../media/images/placeholder.jpg";

const WorkoutSummary = ({ username, workoutName, date }) => {
  return (
    <Card style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
      <div style={{ display: "flex" }}>
        <CardMedia
          title="User profile"
          image={image}
          style={{ width: "100px", height: "100px" }}
        />
        <CardContent>
          <div>
            <Typography variant="caption">{username}</Typography>
          </div>
          <div>
            <Typography variant="body1">{workoutName}</Typography>
          </div>
          <div>
            <Typography variant="caption">{date}</Typography>
          </div>
        </CardContent>
      </div>
      <CardActions>
        <IconButton aria-label="worldwide">
          <ThumbUp />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default WorkoutSummary;
