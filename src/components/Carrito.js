import React,{Fragment, useContext } from 'react';
import '../App.css';
import {ComprasContext} from '../context/ComprasContext';


const Carrito = () => {
    const {carrocompras} = useContext(ComprasContext);
    console.log(carrocompras)

    return ( 
        <Fragment>
            <div className="container-fluid animated fast fadeIn" style={{height:'auto', minHeight:'1500px'}}>
                <h2>Desde Carrito</h2>
            </div>
        </Fragment>
        
     );
}
 
export default Carrito;