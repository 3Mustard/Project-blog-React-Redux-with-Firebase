import firebase, { firestore } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

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
    const { email, password, firstName, lastName, profilePicture } = userInfo;
    const storageRef = firebase.storage().ref();
    
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            email,
            password
        ).then((response) => {
            //get time is used to generate a random id, this is BAD in production. Please change.
            storageRef.child(`profile/${new Date().getTime()}`).put(profilePicture).then((snapshot) => {
                firestore().collection('users').doc(response.user.uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    initials: firstName[0] + lastName[0],
                    picture: snapshot.metadata.fullPath
                });
            });
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch(error => {
            dispatch({ type: 'SIGNUP_ERROR', error });
        });
    }
}
