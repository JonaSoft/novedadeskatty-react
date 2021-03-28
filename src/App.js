import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import Navbarra from './components/Navbar';




function App() {
  return (
    <Router>
      <Navbarra />
      <br></br>
      <Switch>
        <Route exact path="/" component = {Inicio} />
        <Route exact path="/catalogo" component = {Catalogo} />
        <Route exact path="/producto" component = {Producto} />
        <Route exact path="/carrito" component = {Carrito} />
      </Switch>
    </Router>
  );
}

export default App;
