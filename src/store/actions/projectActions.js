export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid; 
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((error) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', error });
        });
    };
};

export const deleteProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const projectID = project.projectID; 
        firestore.collection('projects').doc(projectID).delete()
        .then(() => {
            dispatch({ type: 'DELETE_PROJECT'});
        }).catch((error) => {
            dispatch({ type: 'DELETE_PROJECT_ERROR', error });
        });
    };
};
