// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb_pPGcY9PcJojf8ok0r1-njp3AqRsWt0",
    authDomain: "coffee-store-client-75b66.firebaseapp.com",
    projectId: "coffee-store-client-75b66",
    storageBucket: "coffee-store-client-75b66.appspot.com",
    messagingSenderId: "594272124375",
    appId: "1:594272124375:web:a30f5dd0c1679172b95f92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
