import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

export const signIn = (credentials) => {
    const { email, password } = credentials;

    return (dispatch) => {
         firebase.auth().signInWithEmailAndPassword(
             email,
             password
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
    const { email, password, firstName, lastName } = userInfo;
    
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            email,
            password
        ).then((response) => {
            //get time is used to generate a random id, this is BAD in production. Please change.
            firestore().collection('users').doc(response.user.uid).set({
                firstName: firstName,
                lastName: lastName,
                initials: firstName[0] + lastName[0]
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch(error => {
            dispatch({ type: 'SIGNUP_ERROR', error });
        });
    }
}
