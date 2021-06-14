export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(() => dispatch({ type: 'LOGIN_SUCCESS' }))
            .catch(error => dispatch({ type: 'LOGIN_ERROR', error }))
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => dispatch({ type: 'SIGNOUT_SUCCESS' }))
            .catch(err => dispatch({ type: 'SIGNOUT_FAILED', err }))
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then((res) => {
            firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
        })
    })
    .then(() => {
        const notification = {
            content: 'joined the house!',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: firestore.FieldValue.serverTimestamp()
        }
        firestore.collection('notifications').add(notification)
               .then(doc => console.log('notification added', doc))
               .catch(err => console.log(err))
               dispatch({ type: 'SIGNUP_SUCCESS' })})
    .catch(err => dispatch({ type: 'SIGNUP_ERROR', err }))
    }
}



// firebase.auth().signInWithEmailAndPassword(email, password)
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode === 'auth/wrong-password') {
//     alert('Wrong password.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });
