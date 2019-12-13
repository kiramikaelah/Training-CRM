import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist'; 
import Traininglist from './components/Traininglist';
import WorkoutCal from './components/WorkoutCal';
import Navigator from './components/Navigator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import workout from './Images/workout.jpg';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
       <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">
            Personal Trainer Oy
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <BrowserRouter>
      <Navigator />
             <Switch>
           <Route path="/customerlist" component={Customerlist}/>
         <Route path="/traininglist" component={Traininglist}/>
         <Route path="/workoutcal" component={WorkoutCal}/>
         <Route render={() => <h1>Welcome! <br/><br/><img src={workout} alt="workout image" height="500" width="800"/></h1>}/>
     </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
