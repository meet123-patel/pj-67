import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDlndKTrT9hmWrrmN7gLWj_fFnoXdvgzqA",
    authDomain: "team-voteing-app-7d381.firebaseapp.com",
    databaseURL: "https://team-voteing-app-7d381-default-rtdb.firebaseio.com",
    projectId: "team-voteing-app-7d381",
    storageBucket: "team-voteing-app-7d381.appspot.com",
    messagingSenderId: "348301096619",
    appId: "1:348301096619:web:130b0e140e8f6a76cee9ee"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();