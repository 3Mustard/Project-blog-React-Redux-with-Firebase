import firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = (credentials) => {
    return (dispatch, getState) => {
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
