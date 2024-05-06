// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnDdAMZ_iKJroxlYHSoykeTHjI2G4DnvY",
  authDomain: "private-authentication-5c03f.firebaseapp.com",
  projectId: "private-authentication-5c03f",
  storageBucket: "private-authentication-5c03f.appspot.com",
  messagingSenderId: "624054193028",
  appId: "1:624054193028:web:c43bc953db5e70c51b6bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;