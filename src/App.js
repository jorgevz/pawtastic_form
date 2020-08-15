import React  from 'react';
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
   
    <Router>
    <div className='whole'>
    <nav>
    <ul>
    <li>
    <Link to='/'>Home</Link>
    </li>
    <li>
    <Link to='/About'>About</Link>
    </li>
    </ul>
    </nav>
    
    <Switch>
    
    <Route path='/Form' component={Form}/>
    <Route path='/About' component={About}/>
    <Route exact path='/' component={Home}/>
  
   
    </Switch>
    
    </div>
  
   </Router>
    </div>
  );
}

export default App;
