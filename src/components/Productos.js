import React,{Fragment} from 'react';
import { useParams } from 'react-router-dom';


const Productos = () => {
    console.log(useParams())
    const {categoria} =useParams()

    return ( 
    <Fragment>
        <div className="container-fluid animated fast fadeIn" style={{minheight:'1200px', height:'1500px'}}>
            <h2>Desde Productos {categoria}</h2>
        </div>
    </Fragment>
    
     );
}
 
export default Productos;