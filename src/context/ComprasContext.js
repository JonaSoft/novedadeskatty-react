import React,{ createContext, useState} from 'react';

export const ComprasContext = createContext();

const ComprasProvider = (props) => {

    const [carrocompras, guardarCarroCompras] = useState([]);
    
    return (
        <ComprasContext.Provider
            value ={{
                carrocompras,
                guardarCarroCompras
                
            }}
        >
            {props.children}
        </ComprasContext.Provider>
    );
}
export default ComprasProvider;