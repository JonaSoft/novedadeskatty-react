import React,{Fragment} from 'react';

import Formulario from './Formulario';

import Carrousel from './Carrousel';
import Chats from './Chats';

import Login from './Login';

const Inicio = () => {
    return ( 
        <Fragment>
            <Carrousel />
            <Formulario />

            
            
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Inicio 1</h2>
                    </div>
                    <div className="col-md-4">
                        <Login />
                        <Chats />
                    </div>
                </div>
            </div>

           

        </Fragment>
        
     );
}
 
export default Inicio;