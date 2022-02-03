import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG7GOyZQAF52JHboSszYlcC4X2X3euwJs",
  authDomain: "pf-financetracker-react.firebaseapp.com",
  projectId: "pf-financetracker-react",
  storageBucket: "pf-financetracker-react.appspot.com",
  messagingSenderId: "310537132583",
  appId: "1:310537132583:web:356ad17d65f4646b830c02",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectFirestore = firebaseApp.firestore();
const projectAuth = firebaseApp.auth();

export { projectFirestore, projectAuth };
