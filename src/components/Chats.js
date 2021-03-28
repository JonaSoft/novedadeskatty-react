import React,{Fragment,useState, useEffect} from 'react';
import '../Chats.css';
import  './Login';
//importar firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import  'firebase/firestore';
//import firebaseConfig from '../firebaseConfig';


//const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const Chats = () => {
 //console.log(email) 
 //const { withFirebaseAuth} = Login;
 //console.log( withFirebaseAuth.providers)

const [mensaje, setMensaje] = useState({
    mensaje:'',
    usuario :'',
    fecha: new Date() 
});

const [usuario, setUsuario] = useState({
   usuario: 'admin@gmail.com', 
   password:'123456',
   fecha: new Date()
});


const actualizarState = (e) =>{
    
    setMensaje({
        [e.target.name]: e.target.value,
        usuario :localStorage.getItem('email'),
        fecha: new Date() 

    })

}
const enviarMensaje = async (e)=>{
    e.preventDefault();
    console.log('envia mensaje');
    db.collection('chat-react').doc().set( mensaje )
    console.log('nueva tarea')
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
                         <div className="row">
                            <div className="form-group col-md-9 p-0 pl-3">
                                <input
                                        type="text"
                                        className="form-control mt-2"
                                        name="mensaje"
                                        placeholder="Escribe tu mensaje"
                                        onChange={actualizarState}
                                />
                            </div>
                            <div className="form-group col-md-3 p-0 pr-3">
                                <button 
                                    type="submit"
                                    className="btn btn-success btn-block mt-2"
                                        
                                >
                                    <i class="fas fa-paper-plane"></i>
                                 </button>
                            </div>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
            
            
        </Fragment>
        
     );
}
 
export default Chats
