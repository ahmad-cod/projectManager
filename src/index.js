import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase,  } from 'react-redux-firebase';
import firebaseConfig from './config/fbConfig.js';
// import firebase from 'firebase/app';

const store = createStore(rootReducer, 
  compose(applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig, 
    {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
  )
)

store.firebaseAuthIsReady.then(() => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App /> 
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
