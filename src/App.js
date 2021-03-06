import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import Navbarra from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';



import CategoriasProvider from './context/CategoriasContext';
import ComprasProvider from './context/ComprasContext';


function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
   return (
    <CategoriasProvider>
      <ComprasProvider>
        <Router>
          <Navbarra />
            <br></br>
            <Switch>
              <Route exact path="/" component = {Inicio} />
              <Route exact path="/catalogo" component = {Catalogo} />
              <Route exact path="/catalogo/productos/:categoria" component = {Productos} />
              <Route exact path="/catalogo/carrito" component = {Carrito} />
              <Redirect to="/" component ={Inicio}></Redirect>
            </Switch>
          <Login  />
          <br></br>
          <Footer />
        </Router>
      </ComprasProvider>
      </CategoriasProvider>
  );
}

export default App;
