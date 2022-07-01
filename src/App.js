import React from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container'
import { Outlet } from "react-router-dom";

//import StatsPage from './StatsPage';

//import { Outlet, Link } from "react-router-dom";
//import './App.css';

function App() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
}

export default App;
