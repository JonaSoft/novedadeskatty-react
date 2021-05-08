import React, { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

//crear context
export const CategoriasContext = createContext();

//Provider donde se encuentran las funciones y state

const CategoriasProvider = (props)=>{
    // crear el state del Context
    const [categorias, guardarCategorias] = useState([]);

    useEffect(() => {
        //llamando a la bdMongo
        const obtenerCategorias = async () =>{
            try {
            const resultado = await  clienteAxios.get('/api/categorias') ;
            console.log(resultado.data.categorias)
            await guardarCategorias(resultado.data.categorias)
            } catch (error) {
            console.log(error)
            }
        }
        obtenerCategorias();

    }, []);
    


    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}
export default CategoriasProvider;