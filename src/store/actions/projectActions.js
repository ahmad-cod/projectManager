export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // run async code here
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            createdAt: new Date()
        }).then(() => {
            const notification = {
                content: 'Added a new project',
                user: `${profile.firstName} ${profile.lastName}`,
                time: firestore.FieldValue.serverTimestamp()
            }
            firestore.collection('notifications').add(notification)
                   .then(doc => console.log('notification added', doc))
                   .catch(err => console.log(err))
            dispatch({type: 'ADD_PROJECT', project})
        })
          .catch(err => dispatch({type: 'ADD_PROJECT_ERROR', err}));
    }
}