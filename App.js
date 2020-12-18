import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import './App.css'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import Grido from './Components/Grid/Grid';

//Creating style for the theme for drawer
const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit', height: '100%', background: '#F7F5FB' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))


//Setting up our material-ui drawer within React Router so can go between the two pages
//Styles are applied in the Drawer just below <Drawer
const App = () => {
  const classes = useStyles();


  return (
    <Router>
      <div className="container" style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          classes={{ paper: classes.paper }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Container>
                <Grido />
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" gutterBottom>
                How It was made
              </Typography>
              <Typography variant="body1" gutterBottom>
                <p>This SPA was built using React, React-Router, WebPack, Axios, Material-UI and Chart.js.  </p>
                <br/>
                <p>I had initially tried to build a dashboard using fluent UI however due to a lack of time to research and better understand it I could not create exactly what I wanted and had to scrap the idea after too many issues I could not solve as well as I wanted</p>
                <br/>
                <p>I decided to use Material UI due to time constraints it was a good choice as it seemed to be easier to work with than Fluent UI. I built a Material UI Drawer component for the navigation and then used a Grid component to store the Chart.js chart in so it would be responsive and features could be added in the future that would also be responsive and fit within the grid.</p>
                <br/>
                <p>To get the data from the API I used Axios because I had always heard good reviews from tech people on social media platforms, there were also quite good documentation, articles and videos to refer to for it. I decided to use Chart.js for a similar reason, It had some good documentation and third party articles and videos.</p>
                <br/>
                <p>For the loading spinner I used a Bootstrap animation that was nested in some logic on the return statement in the Chart.js file, so that when the API data was loading it would display.</p>

              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
