import React,{Fragment} from 'react';
import { useParams } from 'react-router-dom';
import './css/Producto.css'

const Producto = ({producto}) => {
    const {categoria} = useParams();
    
    const {_id, nombre, imagen, precio, stock} = producto;
    //Inicio funcion zoom

    //Fin funcion zoom

    return (
        <Fragment>
            <div className="col-md-12">

            
            <div className="card animated fast fadeIn contenedor ">
                <img
                    className="card-img-top imagen"
                    src={imagen}
                    height="350"
                    alt={imagen}
                    title="Producto"
                />
                <div className="card-body">
                    <h5>Código: <span className="itemid">{_id}</span></h5>
                    <h5>Categoria: {nombre}</h5>
                    <h5>Items Disponibles: {stock}</h5>
                    <h5 className="card-title text-secondary">
                        Precio Unid.:   S/.
                        <span className="text-danger display-precio">{precio}</span>
                    </h5>
                    <div className="form-group col-md">
                    <button   style={{fontSize:'1.5em'}}
                        type="submit"
                        className="btn btn-large btn-success btn-block"
                       
                    >Comprar</button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
      );
}
 
export default Producto;