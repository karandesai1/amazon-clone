import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX_NbI_OpXNSMOyzwZhhEOP6-lRRpEkYM",
  authDomain: "clone-fa7f9.firebaseapp.com",
  projectId: "clone-fa7f9",
  storageBucket: "clone-fa7f9.appspot.com",
  messagingSenderId: "165179607567",
  appId: "1:165179607567:web:f39a23ba83dd13ba94717a",
  measurementId: "G-0HNYG9QR8F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth,db};