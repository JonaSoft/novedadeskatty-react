import React, {Fragment, useState} from 'react';
import '../App.css';

const Formulario = () => {
    return (
        <Fragment>
            <form
            
            >
                <div className="container-fluid animated fast fadeIn">
                    <div className="row justify-content-md-center" >
                    <div className="form-group col-md-7">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Busca por producto o categoria, ejemplo: accesorios, cocina,  belleza"
                
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <button
                            type="submit"
                            className="btn btn-lg btn-success btn-block"
                
                        >
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    </div>
                </div>
                
            </form>
    

        </Fragment>
        
      );
}
 
export default Formulario;