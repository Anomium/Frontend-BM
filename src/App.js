import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import Nav from './components/Nav'
import Products from './components/Products';
import CreateProducts from './components/CreateProducts';
import Footer from './components/Footer'
import Login from './components/Login'

function App() {
  return (
    <Router >
      <div className="text" >
        <Nav />
        <div >
          <Route path="/Products" exact component={Products} />
          <Route path="/CreateProducts" component={CreateProducts} />
          <Route path="/Login" component={Login} />
        </div>
        
        <Footer/>
      </div>
      
    </Router>

  );
}

export default App;
