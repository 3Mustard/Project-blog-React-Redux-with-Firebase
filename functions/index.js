const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(document => console.log('notification added', document))
});

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(document => {

        const project = document.data();
        const notification = {
            content: 'Posted a new trade',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    });

exports.userJoined = functions.auth.user()
    .onCreate(user => {
        
        return admin.firestore().collection('users')
        .doc(user.uid).get().then(document => {

            const newUser = document.data();
            const notification = {
                content: 'Created an account',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification);
        });
    });
