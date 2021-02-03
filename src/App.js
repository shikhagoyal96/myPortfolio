import React , {Component} from'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import MyResume from './components/pages/MyResume';

class App extends React.Component{
 render(){
  return (
        <>
          <Router>
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