import firebase from "firebase";

 var firebaseConfig = {
    apiKey: "AIzaSyDXBhf-fJ9wX2oyKmhbwlyJ9Hps8mIJVtU",
    authDomain: "schoolattendenceapp-36375.firebaseapp.com",
    databaseURL: "https://schoolattendenceapp-36375-default-rtdb.firebaseio.com",
    projectId: "schoolattendenceapp-36375",
    storageBucket: "schoolattendenceapp-36375.appspot.com",
    messagingSenderId: "1094880619874",
    appId: "1:1094880619874:web:aaf1bbf14f91b58fe9d03b"
  };



// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
//firebase.initializeApp(firebaseConfig);

export default firebase.database();
