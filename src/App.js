import React from 'react';
import './global.css'
import {BrowserRouter, Route}from 'react-router-dom'

// Paginas
import Cadastro from "./views/cadastro/index"
import Login from "./views/login/index"
import Home from "./views/home/index"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact component={Home}/> 
        <Route path='/login' exact component={Login}/> 
        <Route path='/cadastro' exact component={Cadastro}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
