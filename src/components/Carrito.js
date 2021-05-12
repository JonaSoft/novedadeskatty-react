import React,{Fragment, useContext,useEffect } from 'react';
import '../App.css';
import Items from './Items';
import { Table } from 'react-bootstrap';
import {ComprasContext} from '../context/ComprasContext';


const Carrito = () => {
    let suma = 0
    const {carrocompras} = useContext(ComprasContext);
    console.log(carrocompras);

    let arraycompra = localStorage.getItem('carrito');
    let arraycompras = JSON.parse(arraycompra);
    console.log(arraycompras);
  
    if (arraycompras.length===0){
        console.log('carrito vacio')
    }
    const calcularTotal = async ()=> {
        const subtotal = document.getElementsByClassName('subtotal');
        //console.log(subtotal.length);
        for (let i = 0; i < subtotal.length; i++ ){
                console.log(i)
                suma += parseFloat(subtotal[i].innerText)
                console.log(suma)
        }
        
        suma = suma.toFixed(2)
        document.getElementById('pagototal').innerHTML = suma
    }
    useEffect(() => {
        
       calcularTotal()
       
    }, [])
    
    return ( 
        <Fragment>
            <div className="container animated fast fadeIn" style={{height:'auto'}}>
                <h2 className="text-center m-2">Cotización de mis Productos</h2>
                
            
                {arraycompras.length === 0
                    ? 
                        <div class="alert alert-danger" role="alert">
                            Tu carrito de compras esta vacío
                        </div>
                      
                    : null
                }    
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th scope="col"  className="text-center">Código</th>
                            <th scope="col"  colspan="2" className="text-center">Nombre</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th id="col-subtotal" scope="col"  className="text-center">Sub-Total</th>
                        </tr>
                    </thead>
                </Table>   
               
                {arraycompras.map(item =>(
                        <Items 
                            key = {item._id}
                            _id = {item._id}
                            imagen = {item.imagen}
                            nombre = {item.nombre}
                            precio = {item.precio}
                            stock = {item.stock}
                            cantidad = {item.itemcantidad}
                        />
                        
                    ))
                }
               
                <Table id="totalfinal" striped bordered hover size="sm">
                   
                        <tr>
                            
                            <th scope="col">Total a Pagar </th>
                            <th scope="col"  className="text-right"> S/. <span id="pagototal" >{suma}</span> </th>
                        </tr>
                   
                </Table>
                <br></br>
                {arraycompras.length === 0
                ?
                    null
                :
                <div class="alert alert-success" role="alert">
                    Realiza la coordinación de tu pago para el envió inmediato de tu pedido,  por medio del chat o comunicate directamente a nuestros números !!!!
                </div>
                }
                
            </div>
        </Fragment>
        
     );
}
 
export default Carrito;