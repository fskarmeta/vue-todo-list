import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.VUE_APP_F_API_KEY,
  authDomain: process.env.VUE_APP_F_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_F_DB_URL,
  projectId: process.env.VUE_APP_F_PRJ_ID,
  storageBucket: process.env.VUE_APP_F_STOR_BUCK,
  messagingSenderId: process.env.VUE_APP_MESS_SEND_ID,
  appId: process.env.VUE_APP_F_APP_ID,
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();
