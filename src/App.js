import React from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Nav from './components/Nav'
import ListProducts from './components/ListProducts';
import CreateProducts from './components/CreateProducts';
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <Router >
      <div className="text" >
        <Nav />
        <div >
          <Route path="/Home" exact component={Home} />
          <Route path="/ListProducts" exact component={ListProducts} />
          <Route path="/CreateProducts" component={CreateProducts} />
          <Route path="/Login" component={Login} />
        </div>
        
        <Footer/>
      </div>
      
    </Router>

  );
}

export default App;
