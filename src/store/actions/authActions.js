import firebase, { firestore } from 'firebase/app';
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

export const signUp = (userInfo) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            userInfo.email,
            userInfo.password
        ).then((response) => {
            return firestore().collection('users').doc(response.user.uid).set({
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                initials: userInfo.firstName[0] + userInfo.lastName[0]
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch(error => {
            dispatch({ type: 'SIGNUP_ERROR', error });
        });
    }
}
