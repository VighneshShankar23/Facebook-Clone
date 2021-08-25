import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDB_yuaILyKGFVTCKRMIaz1zV0vs4h5zJk",
  authDomain: "fbar-be482.firebaseapp.com",
  projectId: "fbar-be482",
  storageBucket: "fbar-be482.appspot.com",
  messagingSenderId: "954140948870",
  appId: "1:954140948870:web:78e804bcf8835839579407"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };