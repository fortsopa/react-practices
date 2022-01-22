import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBDVxqzvzQ3kUuH0-ydIPGoOlCPM1EktY4',
  authDomain: 'crwn-db-e1a4e.firebaseapp.com',
  projectId: 'crwn-db-e1a4e',
  storageBucket: 'crwn-db-e1a4e.appspot.com',
  messagingSenderId: '460291410269',
  appId: '1:460291410269:web:dfa14bbbbed13298d480b4',
  measurementId: 'G-KPLR10BSL2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
