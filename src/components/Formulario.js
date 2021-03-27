import React, {Fragment, useState} from 'react';


const Formulario = () => {
    return (
        <Fragment>
            <form
            
            >
                <div className="container-fluid ">
                    <div className="row justify-content-md-center" >
                    <div className="form-group col-md-6">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Busca por categoria, ejemplo: ropa, cocina o belleza"
                
                        />
                    </div>
                    <div className="form-group col-md-2">
                        <input
                            type="submit"
                            className="btn btn-lg btn-danger btn-block"
                
                        />
                    </div>
                    </div>
                </div>
                
            </form>
    

        </Fragment>
        
      );
}
 
export default Formulario;