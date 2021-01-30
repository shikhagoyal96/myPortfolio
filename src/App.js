import React , {Component} from'react';
import './App.css';
// import Navbar from './components/navigation/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
//import myresume from '../pages/MyResume';
import MyResume from './components/pages/MyResume';

class App extends React.Component{
 render(){
  return (
        <>
          <Router>
          {/* <Navbar /> */}
            <Switch>
              <Route path='/'  exact component={Home}/>
              <Route path='/myresume'  exact component={MyResume}/>
            </Switch>
          </Router>        
       </>
      );
 }
}

export default App;