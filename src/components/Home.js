import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from "@material-ui/core";
  import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
  const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(3),
      },
    },
  })
);

function Home() {
    return (
        <Box className={useStyles.root}>
      <Card>
        <CardContent>
          <Typography variant="h3">Welcome to my Page</Typography>
          <Typography variant="h5">Click on User</Typography>
        </CardContent>
      </Card>
    </Box>
    );
  }
  
  export default Home;
  