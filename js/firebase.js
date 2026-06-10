/* firebase.js */

/* FIREBASE APP */

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
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    onSnapshot,
    serverTimestamp,
    collection,
    addDoc,
    increment,
    query,
    orderBy,
    limit,
    getDocs
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

/* XP SYSTEM */

const XP_PER_LEVEL = 500;

/* USER DEFAULT DATA */

function getDefaultUserData(user){

    return {

        uid:
            user.uid,

        displayName:
            user.displayName ||
            "Developer",

        email:
            user.email ||
            "No Email",

        photoURL:
            user.photoURL ||
            "../assets/icons/avatar.jpg",

        level:
            1,

        xp:
            0,

        solvedQuestions:
            0,

        correctAnswers:
            0,

        wrongAnswers:
            0,

        accuracy:
            0,

        streak:
            0,

        achievementCount:
            0,

        createdAt:
            serverTimestamp(),

        lastLogin:
            serverTimestamp()
    };
}

/* CREATE USER DOCUMENT */

async function createUserDocument(user){

    try{

        const userRef =
            doc(db, "users", user.uid);

        const userSnapshot =
            await getDoc(userRef);

        if(!userSnapshot.exists()){

            await setDoc(
                userRef,
                getDefaultUserData(user)
            );

            /* DEFAULT ACHIEVEMENT */

            await addAchievement(
                user.uid,
                "First Login",
                "Successfully joined Defixer"
            );

            /* DEFAULT ACTIVITY */

            await addRecentActivity(
                user.uid,
                "Joined Defixer"
            );
        }

        else{

    await updateDoc(userRef, {

        displayName:
            user.displayName || "Developer",

        email:
            user.email || "No Email",

        photoURL:
            user.photoURL ||
            "../assets/icons/avatar.jpg",

        lastLogin:
            serverTimestamp()
    });
}
    }

    catch(error){

        console.log(
            "User document creation error:",
            error
        );
    }
}

/* GET USER DATA */

async function getUserData(uid){

    try{

        const userRef =
            doc(db, "users", uid);

        const userSnapshot =
            await getDoc(userRef);

        if(userSnapshot.exists()){

            return userSnapshot.data();
        }

        return null;
    }

    catch(error){

        console.log(
            "Get user data error:",
            error
        );

        return null;
    }
}

/* UPDATE USER DATA */

async function updateUserData(uid, data){

    try{

        const userRef =
            doc(db, "users", uid);

        await updateDoc(userRef, data);

    }

    catch(error){

        console.log(
            "Update user data error:",
            error
        );
    }
}

/* XP + LEVEL SYSTEM */

function calculateLevel(xp){

    return Math.floor(
        xp / XP_PER_LEVEL
    ) + 1;
}

function calculateLevelXP(xp){

    return xp % XP_PER_LEVEL;
}

async function addXP(uid, amount){

    try{

        const userData =
            await getUserData(uid);

        if(!userData) return;

        const newXP =
            userData.xp + amount;

        const newLevel =
            calculateLevel(newXP);

        await updateUserData(uid, {

            xp:
                newXP,

            level:
                newLevel
        });

        if(newLevel > userData.level){

            await addAchievement(
                uid,
                `Level ${newLevel} Reached`,
                `Reached level ${newLevel}`
            );

            await addRecentActivity(
                uid,
                `Reached Level ${newLevel}`
            );
        }

    }

    catch(error){

        console.log(
            "XP update error:",
            error
        );
    }
}

/* STREAK SYSTEM */

function getTodayDate(){

    return new Date()
        .toISOString()
        .split("T")[0];
}

/* RECENT ACTIVITY */

async function addRecentActivity(
    uid,
    activity
){

    try{

        const activityRef =
            collection(
                db,
                "users",
                uid,
                "recentActivity"
            );

        await addDoc(activityRef, {

            activity,
            createdAt:
                serverTimestamp()
        });

    }

    catch(error){

        console.log(
            "Recent activity error:",
            error
        );
    }
}

/* GET RECENT ACTIVITIES */

async function getRecentActivities(uid){

    try{

        const activityRef =
            collection(
                db,
                "users",
                uid,
                "recentActivity"
            );

        const q =
            query(
                activityRef,
                orderBy(
                    "createdAt",
                    "desc"
                ),
                limit(10)
            );

        const snapshot =
            await getDocs(q);

        const activities = [];

        snapshot.forEach((doc)=>{

            activities.push(doc.data());
        });

        return activities;

    }

    catch(error){

        console.log(
            "Fetch activity error:",
            error
        );

        return [];
    }
}

/* ACHIEVEMENTS */

async function addAchievement(
    uid,
    title,
    description
){

    try{

        const achievementRef =
            collection(
                db,
                "users",
                uid,
                "achievements"
            );

        await addDoc(achievementRef, {

            title,
            description,

            createdAt:
                serverTimestamp()
        });

        const userData =
            await getUserData(uid);

        await updateUserData(uid, {

            achievementCount:
                userData.achievementCount + 1
        });

    }

    catch(error){

        console.log(
            "Achievement error:",
            error
        );
    }
}

/* GET ACHIEVEMENTS */

async function getAchievements(uid){

    try{

        const achievementRef =
            collection(
                db,
                "users",
                uid,
                "achievements"
            );

        const q =
            query(
                achievementRef,
                orderBy(
                    "createdAt",
                    "desc"
                ),
                limit(10)
            );

        const snapshot =
            await getDocs(q);

        const achievements = [];

        snapshot.forEach((doc)=>{

            achievements.push(doc.data());
        });

        return achievements;

    }

    catch(error){

        console.log(
            "Fetch achievements error:",
            error
        );

        return [];
    }
}

/* LIVE USER LISTENER */

function subscribeToUserData(
    uid,
    callback
){

    const userRef =
        doc(db, "users", uid);

    return onSnapshot(
        userRef,
        (doc)=>{

            if(doc.exists()){

                callback(doc.data());
            }
        }
    );
}

/* EXPORTS */

export {

    /* CORE */

    auth,
    db,
    provider,

    /* AUTH */

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,

    /* PERSISTENCE */

    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,

    /* FIRESTORE */

    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
    addDoc,
    increment,
    serverTimestamp,
    onSnapshot,

    /* USER SYSTEM */

    createUserDocument,
    getUserData,
    updateUserData,
    subscribeToUserData,

    /* XP */

    addXP,
    calculateLevel,
    calculateLevelXP,
    XP_PER_LEVEL,

    /* ACHIEVEMENTS */

    addAchievement,
    getAchievements,

    /* ACTIVITY */

    addRecentActivity,
    getRecentActivities
};