import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLshj6zS0eSSv1x_MBYwIuy-O2OoYXrew",
  authDomain: "my-todo-137cd.firebaseapp.com",
  databaseURL: "https://my-todo-137cd-default-rtdb.firebaseio.com",
  projectId: "my-todo-137cd",
  storageBucket: "my-todo-137cd.appspot.com",
  messagingSenderId: "685819505830",
  appId: "1:685819505830:web:e647207d7d0920962d5867",
  measurementId: "G-BHCD5K4372"
});

const db = firebaseApp.firestore();

export default db;

    
