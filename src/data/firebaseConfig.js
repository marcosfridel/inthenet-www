// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
    authDomain: "inthenet-5ea25.firebaseapp.com",
    projectId: "inthenet-5ea25",
    storageBucket: "inthenet-5ea25.appspot.com",
    messagingSenderId: "801438525315",
    appId: process.env.REACT_APP_GOOGLE_FIREBASE_APP_ID,
    measurementId: "G-GD73Z4R136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export default db;

