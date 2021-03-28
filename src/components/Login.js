import React, { Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import  firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import Chats from './Chats'


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
            console.log(email);
            localStorage.setItem('email', JSON.stringify(email))
          }
         
           
          
      return (
        <div>
            {
              user
                ? <Chats  />
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : null
            }
  
           
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