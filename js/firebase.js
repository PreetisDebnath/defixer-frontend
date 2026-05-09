// FIREBASE APP

import {
    initializeApp
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

/* FIREBASE AUTH */

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

/* FIRESTORE */

import {
    getFirestore
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

/* FIREBASE CONFIG */

const firebaseConfig = {

    apiKey:
        "AIzaSyA9BS2l9n44EqbaEdU3LlcDztGMYwo2rCw",

    authDomain:
        "defixer-d9ba0.firebaseapp.com",

    projectId:
        "defixer-d9ba0",

    storageBucket:
        "defixer-d9ba0.firebasestorage.app",

    messagingSenderId:
        "55615056267",

    appId:
        "1:55615056267:web:2403a4d3335012b4aa278e",

    measurementId:
        "G-69KESBFV2Y"
};

/* INITIALIZE */

const app =
    initializeApp(firebaseConfig);

/* AUTH */

const auth =
    getAuth(app);

/* DATABASE */

const db =
    getFirestore(app);

/* GOOGLE PROVIDER */

const provider =
    new GoogleAuthProvider();

/* EXPORTS */

export {

    /* CORE */

    auth,
    db,
    provider,
    GoogleAuthProvider,

    /* AUTH FUNCTIONS */

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,

    /* PERSISTENCE */

    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence
};