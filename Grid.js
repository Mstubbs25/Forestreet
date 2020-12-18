import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import Chart4 from '../Components/Chart/Chart4';




//Setting up styling for the grid that we can use below
const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'flex',
        height: '100%',
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.seconday,
        background: theme.palette.success.light,
    }

}));



//Grid is rendered below with Chart that is imported above inside the Grid so it can be
function Grido() {
    const classes = useStyles();
  return (
      <Grid container spacing={2} className={classes.grid}  >
          <Grid item xs={12} md={12}>
                  <Chart />
          </Grid>
      </Grid>
  );
}

export default Grido;