import React from "react";
import Store from "./Store";
import Cart from "./Cart";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function View() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
        <Grid container spacing={1}>

            <Grid item xs={12}>
            <Store/> <Cart/>
            </Grid>

        </Grid>
    </div>
  );
}


  
export default View;