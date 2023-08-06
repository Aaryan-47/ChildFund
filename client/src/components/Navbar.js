import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(70),
    display: "flex",
  },
  navButtons:{
    display:"flex",
    marginLeft: theme.spacing(-50),
   
  },
  Buttons:{
   marginRight:theme.spacing(10),
  },
 logo: {
    flexGrow: "0.7",
    cursor: "pointer",
    color:"black",
  },
  imglogo:{
   width:"7%",
   height:"4%",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(14),
    "&:hover": {
      color: "blue",
      borderBottom: "1px solid blue",
    },
  },
}));



function Navbar() {
  const classes = useStyles();

  return (
    <>
    <AppBar style={{backgroundColor:"white"}}position="static" className="nav">
      <CssBaseline />
      <Toolbar>
       
        <Typography variant="h4" className={classes.logo}>
          Child Fund
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/testimonials" className={classes.link}>Testimonials</Link>
            <Link to="/" className={classes.link}>Your Donations</Link>
            <Link to="/main" className={classes.link}>Home</Link>
          </div>
          <div className={classes.navButtons}>
            <Button style={{backgroundColor:"blue",color:"white"}}className={classes.Buttons} variant="contained"size="large">Logout</Button>
            
          </div>
      </Toolbar>
    </AppBar>
    
    </>
  );
}
export default Navbar;