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
    <Link to='/Form'>Form</Link>
    </li>
    </ul>
    </nav>
    
    <Switch>
   
    <Route exact path='/Navbar' component={Navbar}/>
    <Route path='/Form' component={Form}/>
    
  
   
    </Switch>
    
    </div>
  
   </Router>
    </div>
  );
}

export default App;
