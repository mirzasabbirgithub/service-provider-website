// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
          apiKey: "AIzaSyDsUbz5ueuBteRXj1mMvxyERYBOJeYDP0Q",
          authDomain: "doctor-site-4144d.firebaseapp.com",
          projectId: "doctor-site-4144d",
          storageBucket: "doctor-site-4144d.appspot.com",
          messagingSenderId: "22583948559",
          appId: "1:22583948559:web:98428e9ae0988934103a7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;