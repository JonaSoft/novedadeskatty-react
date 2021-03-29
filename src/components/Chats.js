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

// state guardar valores del mensaje enviado
 const [mensaje, setMensaje] = useState({});

// state parainvocar  mensajes del chat de chat-react
const [chat, setChat] = useState([]);

//limpia cadena de usuario y avatar
const valorusuario = localStorage.getItem('email').substring(1,localStorage.getItem('email').length-1);
const valoravatar = localStorage.getItem('avatar').substring(1,localStorage.getItem('avatar').length-1);

//guardar valores del usuario 
const actualizarState = (e) =>{
    
    setMensaje({
        [e.target.name]: e.target.value,
        usuario :valorusuario,
        avatar :valoravatar,
        fecha: new Date() 

    })
};


// funcion para invocar coleccion chat-react
 const llamarColeccion = ()=>{
    //setChat([])
    db.collection("chat-react1").orderBy('fecha','desc').onSnapshot((querySnapshot) => {     
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
        });
        setChat(docs)
        console.log(docs)
       
        console.log(chat)
    });
    console.log(chat)
 }


// funcion para guardar mensaje
const enviarMensaje = async (e)=>{
    e.preventDefault();
    
    //setChat([]);
    console.log('envia mensaje');
    db.collection('chat-react1').doc().set( mensaje )
    .then(res =>{
        //console.log(res)
    })
    //console.log('nueva tarea')
    
    
    //    const padre= imagen.parentNode;
    //padre.removeChild(imagen);
    
    llamarColeccion();
    //console.log({chat})
    //setChat([])
};



    return ( 
        <Fragment>
            
            <div className="container main-container">
                <div className="chat-window">
                    <h5>!!! HOLA !!!, en que te puedo ayudar? </h5>
                   
                    <hr></hr>
                    <div id="app-mensajes"className="app-mensajes">
                        
                        
                        {chat.map((mensuser) => {
                           return <div className="container-fluid p-0">
                               {mensuser.usuario==="jonasoftservice@gmail.com"
                                    ?
                                    <div className="text-right">
                                        <span className="badge badge-primary">Novedades Katty</span>
                                            <p>
                                                {mensuser.mensaje}
                                            </p>
                                    </div>       
                                    : 
                                        <div className="text-left mt-2">
                                            <span className="badge badge-light fecha">
                                            {mensuser.usuario}
                                            </span>    
                                        <div>
                                        <span > 
                                            <img 
                                                src={mensuser.avatar}
                                                className="rounded-circle" 
                                                width="35" 
                                                height="35"
                                            /> 
                                        </span> 
                                        <span  className="ml-2">{mensuser.mensaje} </span>  
                                        </div>
                                    </div>
                                }
                                    
                                    
                                 </div>
                                    
                        }
                            
                        )}
                       
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
