import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyD1paCxoB1PCtxxPgoSV8VCGxhrCp8YQx8",
    authDomain: "meetinglog-d23b1.firebaseapp.com",
    databaseURL: "https://meetinglog-d23b1.firebaseio.com",
    projectId: "meetinglog-d23b1",
    storageBucket: "meetinglog-d23b1.appspot.com",
    messagingSenderId: "204020995552"
  };

  firebase.initializeApp(Config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;