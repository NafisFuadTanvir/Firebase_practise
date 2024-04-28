// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvn6VzNr7KzUEXVU6uzhMjYDeqzHoZLIY",
  authDomain: "email-password-auth-63d7a.firebaseapp.com",
  projectId: "email-password-auth-63d7a",
  storageBucket: "email-password-auth-63d7a.appspot.com",
  messagingSenderId: "877035475269",
  appId: "1:877035475269:web:84de448ca5152cddecee2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;