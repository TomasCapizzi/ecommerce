import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  //OBJETO DE FIREBASE
    apiKey: "AIzaSyCBb6FcFi9xBbfFvje8YzoF3tLbKpOmSJk",
    authDomain: "craft-beer-8db4e.firebaseapp.com",
    projectId: "craft-beer-8db4e",
    storageBucket: "craft-beer-8db4e.appspot.com",
    messagingSenderId: "601427856399",
    appId: "1:601427856399:web:5bd2d9494ce97723c6a77a"
};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
  return app;
}
export const database = firebase.firestore();