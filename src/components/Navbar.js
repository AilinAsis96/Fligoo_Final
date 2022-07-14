import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(1),
    "&:hover": {
      color: "",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar 
    style={{backgroundColor:"#252850"}}
    position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          Fligoo Test
        </Typography>
        <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </div>
          <div className={classes.navlinks}>
            <Link to="/user" className={classes.link}>
              User
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;