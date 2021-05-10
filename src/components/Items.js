import React,{Fragment} from 'react';
import { Table } from 'react-bootstrap';

const Items = ({_id, imagen, nombre, precio,cantidad, stock}) => {
    const subtotal = (precio * cantidad).toFixed(2);
    
    
    return (
       
            
                    <Table >    
                       <tr>
                            <td  scope="col" className="text-left">_26-2021</td>
                            <td  scope="col" className="text-left">{nombre}</td>
                            <td  scope="col" className="text-left">{precio}</td>
                            <td  scope="col" className="text-left">{cantidad}</td>
                            <td className="subtotal text-right">{subtotal}</td>
                        </tr>
                    </Table>
                    
            
       
        

      );
}
 
export default Items;