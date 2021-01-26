import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7RDCgvmOu6fJU-uI-iFCt2kXw5L95tcA",
    authDomain: "discord-a428d.firebaseapp.com",
    projectId: "discord-a428d",
    storageBucket: "discord-a428d.appspot.com",
    messagingSenderId: "816529233785",
    appId: "1:816529233785:web:8f4de38f90a7f26ded81a8",
    measurementId: "G-XC4GCJ52CF"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider};

export default db;

