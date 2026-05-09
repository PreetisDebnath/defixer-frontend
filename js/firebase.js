// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA9BS2l9n44EqbaEdU3LlcDztGMYwo2rCw",
//   authDomain: "defixer-d9ba0.firebaseapp.com",
//   projectId: "defixer-d9ba0",
//   storageBucket: "defixer-d9ba0.firebasestorage.app",
//   messagingSenderId: "55615056267",
//   appId: "1:55615056267:web:2403a4d3335012b4aa278e",
//   measurementId: "G-69KESBFV2Y"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Import the functions you need from Firebase

import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

    apiKey: "AIzaSyA9BS2l9n44EqbaEdU3LlcDztGMYwo2rCw",

    authDomain: "defixer-d9ba0.firebaseapp.com",

    projectId: "defixer-d9ba0",

    storageBucket: "defixer-d9ba0.firebasestorage.app",

    messagingSenderId: "55615056267",

    appId: "1:55615056267:web:2403a4d3335012b4aa278e",

    measurementId: "G-69KESBFV2Y"

};

/* INITIALIZE FIREBASE */

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);

/* EXPORTS */

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail
};