import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from 'react-router-dom'
  import Navbar from './component/Navbar';
  import Form from './component/Form';
  
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Form/>
    </div>
  );
}

export default App;
