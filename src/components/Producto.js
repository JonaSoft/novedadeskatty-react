import React,{Fragment} from 'react';
import { useParams } from 'react-router-dom';

const Producto = ({producto}) => {
    const {categoria} = useParams();
    //console.log(categoria)
    //console.log(useParams())
    //const filtroProducto = producto.filter(nuevo =>)
    const {nombre, imagen, precio} = producto;

    return (
        <Fragment>
            <div className="card animated fast fadeIn">
                <img
                    className="card-img-top"
                    src={imagen}
                    height="200"
                    alt={imagen}
                    title="Producto"
                />
                <div className="card-body">

                    <h5 className="card-title text-secondary text-center">PRECIO   S/. {precio}</h5>
                    <div className="form-group col-md">
                    <button   style={{fontSize:'1.5em'}}
                        type="submit"
                        className="btn btn-large btn-warning btn-block"
                       
                    >Comprar</button>
                </div>
                </div>
            </div>

        </Fragment>
      );
}
 
export default Producto;