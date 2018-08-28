import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import store from './../store/index';

let config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

auth.useDeviceLanguage();
firestore.settings({
  timestampsInSnapshots: true
});

auth.onAuthStateChanged((data) => {
  if(auth.currentUser){
    store.dispatch.auths.SIGN_IN(data);
  } else {
    store.dispatch.auths.SIGN_OUT(data);
  }
})