import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
  } from "react-router-dom";

function Navigator() {
    return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
    <ul className="navbar-nav">
    <li className="nav-item">
    <Link className="nav-link"to="/customerlist">Customers</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link"to="/traininglist">Trainings</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link"to="/workoutcal">Calendar</Link>
    </li>
  </ul>

</nav>
    );
  }
  
  export default Navigator;