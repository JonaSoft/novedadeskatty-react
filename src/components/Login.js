import React, { Fragment,Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import  firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import Chats from './Chats'
import '../App.css'

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
          //const [email] = user

          if (user){
            const email = user.email;
            const uid = user.uid 
            const avatar = user.photoURL;
            //console.log(email);
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('uid', JSON.stringify(uid));
            localStorage.setItem('avatar', JSON.stringify(avatar));
          }
         
           
          
      return (
        <div id ="cierrachat"className="container-fluid d-flex justify-content-end">
            {
              user
                ?
                <Fragment>
                  <div className="row">
                    
                      <div className="col-md-12">
                      <Chats />
                      </div>
                    </div>  
                    <div className="row">               
                      <div  className="col-md-12 text-left">
                        <button  className="btn btn-danger mb-2" onClick={signOut}>
                            <i class="fas fa-sign-out-alt "></i>
                            Cerrar Chat
                        </button>
                      </div>
                  </div>
                 
                </Fragment>

                
                
                :
                <div className="row" >
                  
                  <button className=" btn btn-primary mb-2" onClick={signInWithGoogle}>
                    <i class="far fa-comment-dots fa-2x"></i>
                    <span className="text-white"> Necesitas ayuda?</span>
                </button>
                <br></br>
                </div>
            }
           <br></br>
        </div>
      );        
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);