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
 

// state guardar valores del mensaje enviado
 const [mensaje, setMensaje] = useState({});

// state parainvocar  mensajes del chat de chat-react
const [chat, setChat] = useState([]);

//limpia cadena de usuario y avatar
const valorusuario = localStorage.getItem('email').substring(1,localStorage.getItem('email').length-1);
const valoravatar = localStorage.getItem('avatar').substring(1,localStorage.getItem('avatar').length-1);
let fechamsj = new Date();
fechamsj= fechamsj.getDate() + "/" + (fechamsj.getMonth() +1) + "/" +fechamsj.getFullYear();
console.log(fechamsj)

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
        setMensaje({
            mensaje:''
        })
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
            
            <div className="container-fluid  main-container animated fast fadeIn">
                <div id="chat-window"className="chat-window ">
                    <h5 className="text-white m-2"><span> <img src="/imagenes/wizard.png" alt="" className="" width="60" height="60"/></span> Hola  . . .   en que te puedo ayudar? </h5>
                   
                    
                    <div className="app-mensajes">
                        
                        
                        {chat.map((mensuser) => {
                           return   <div className="container-fluid p-0">
                                        {mensuser.usuario==="jonasoftservice@gmail.com"
                                        ?
                                        <div className="text-right">
                                            <span className="badge badge-primary mr-2">Novedades Katty</span>
                                                <p  className="mr-2">
                                                <span > 
                                                    <img 
                                                        src={mensuser.avatar}
                                                        className="rounded-circle" 
                                                        width="35" 
                                                        height="35"
                                                    /> 
                                                </span> 
                                                    {mensuser.mensaje}
                                                </p>
                                        </div>       
                                        : 
                                            <div className="text-left mt-2">
                                                <span className="badge badge-success fecha">
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
                         <div className="row p-0 mt-2">
                            <div className="col-md-12 ">
                                <input
                                        type="text"
                                        className="form-control "
                                        name="mensaje"
                                        
                                        placeholder="Escribe tu mensaje"
                                        value={mensaje.mensaje}
                                        onChange={actualizarState}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 ">
                                <button 
                                    type="submit"
                                    className="btn btn-warning btn-block p-0"
                                        
                                >
                                    <i class="fas fa-paper-plane text-white"> </i>
                                    <h5 className=" text-white "> </h5>
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
