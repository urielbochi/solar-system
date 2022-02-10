import React, { useState } from 'react';
import './App.css';
import EarthButton from './components/EarthButton';
import SolarSystem from './components/SolarSystem';


function App({ }) {

    return(
      <div class='App' id='mainapp'>
        <SolarSystem/>
    </div>
    )
  }

export default App;
