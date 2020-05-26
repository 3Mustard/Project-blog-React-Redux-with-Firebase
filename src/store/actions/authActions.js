import firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = (credentials) => {
    return (dispatch) => {
         firebase.auth().signInWithEmailAndPassword(
             credentials.email,
             credentials.password
         ).then(() => {
             dispatch({ type: 'LOGIN_SUCCESS' });
         }).catch((error) => {
             dispatch({ type: 'LOGIN_ERROR', error });
         });
    }
}

export const signOut = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}