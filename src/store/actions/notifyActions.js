export const notify = () => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();

        firestore.document('projects/{projectId}').onCreate(doc => {
            const project = doc.data();
            const notification = {
                content: 'Added a new project',
                user: `${project.authorFirstName} ${project.authorLastName}`,
                time: firestore.FieldValue.serverTimestamp()
            }
            firestore.collection('notifications').add(notification)
               .then(doc => console.log('notification added', doc))
               .catch(err => console.log(err))
        })

        firebase.auth.user().onCreate(user => {
            return firestore.collection('users').doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: 'joined the house',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: firestore.FieldValue.serverTimestamp()
                }
                firestore.collection('notifications').add(notification)
                   .then(doc => console.log('notification added', doc))
                   .catch(err => console.log(err))
            })
        })
    }
}