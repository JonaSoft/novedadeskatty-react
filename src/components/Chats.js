import React,{Fragment,useState, useEffect} from 'react';
import '../Chats.css';
import  Login from './Login';
//importar firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const Chats = () => {

const [mensaje, setMensaje] = useState({mensaje:''});

const [user, setUser] = useState({
   email: 'admin@gmail.com', 
   password:'123456'
});


const actualizarState = (e) =>{
    
    setMensaje({
        [e.target.name]: e.target.value
    })

}
const enviarMensaje = (e)=>{
    e.preventDefault();
    console.log('envia mensaje');
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(response =>{
        console.log(response.user)
        firebase.database().ref(`/users/${response.user.uid}`).set(mensaje);
    
    })
    .catch(error => {
        console.log(error);
    })
}


    return ( 
        <Fragment>
            
            <div className="container main-container">
                <div className="chat-window">
                    <h5>!!! HOLA !!!, en que te puedo ayudar? </h5>
                   
                    <hr></hr>
                    <div id="app-mensajes"className="app-mensajes">
                
                        <div className="text-right">
                            <span className="badge badge-primary">Novedades Katty</span>
                            <p>
                                Bienvenido a mi chat
                            </p>
                        </div>
                        <div className="text-left">
                            <span className="badge badge-success">Cliente</span>
                            <p>
                                Saludos Novedades 
                            </p>
                        </div>
                    </div>
                    <form
                        onSubmit={enviarMensaje}
                    >
                        <div className="from-crontrol">
                            <input
                            type="text"
                            className="form-control mt-2 offset-m2"
                            name="mensaje"
                            placeholder="Escribe tu mensaje"
                            onChange={actualizarState}
                            />
                            <input 
                                type="submit"
                                className="btn btn-success btn-block"
                                value="Enviar"
                            />
                        </div>
                        
                    </form>
                    
                </div>
            </div>
            
            
        </Fragment>
        
     );
}
 
export default Chats
