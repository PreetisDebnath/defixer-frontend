/*  script.js  */

/* FIREBASE */

import {

    auth,

    provider,

    createUserWithEmailAndPassword,

    signInWithEmailAndPassword,

    signInWithPopup,

    setPersistence,

    browserLocalPersistence,

    browserSessionPersistence,

    sendPasswordResetEmail,

    onAuthStateChanged,

    createUserDocument

}
from "./firebase.js";

/* FIREBASE AUTH */

import {

    GoogleAuthProvider

}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

/* EMAIL VALIDATION */

function isValidEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
    );
}

/* TOAST */

let toastTimeout;

function showToast(message){

    const toast =
        document.getElementById(
            "toast"
        );

    clearTimeout(toastTimeout);

    toast.textContent =
        message;

    toast.classList.add("show");

    toastTimeout =
        setTimeout(()=>{

            toast.classList.remove(
                "show"
            );

        }, 3000);
}

/* AUTO REDIRECT */

onAuthStateChanged(
    auth,
    (user)=>{

        if(user){

            window.location.href =
                "./pages/dashboard.html";
        }
    }
);

/* TABS */

const loginTab =
    document.getElementById(
        "login-tab"
    );

const signupTab =
    document.getElementById(
        "signup-tab"
    );

/* FORMS */

const loginForm =
    document.getElementById(
        "login-form"
    );

const signupForm =
    document.getElementById(
        "signup-form"
    );

/* GOOGLE BUTTONS */

const googleLoginBtn =
    document.getElementById(
        "google-login"
    );

const googleSignupBtn =
    document.getElementById(
        "google-signup"
    );

/* FORGOT PASSWORD */

const forgotPasswordBtn =
    document.getElementById(
        "forgot-password"
    );

/* DISABLE SCROLL INITIALLY */

document.body.classList.add(
    "no-scroll"
);

/* TAB SWITCHING */

loginTab.addEventListener(
    "click",
    ()=>{

        loginForm.classList.remove(
            "hidden"
        );

        signupForm.classList.add(
            "hidden"
        );

        loginTab.classList.add(
            "active-tab"
        );

        signupTab.classList.remove(
            "active-tab"
        );

        document.body.classList.add(
            "no-scroll"
        );
    }
);

signupTab.addEventListener(
    "click",
    ()=>{

        signupForm.classList.remove(
            "hidden"
        );

        loginForm.classList.add(
            "hidden"
        );

        signupTab.classList.add(
            "active-tab"
        );

        loginTab.classList.remove(
            "active-tab"
        );

        document.body.classList.remove(
            "no-scroll"
        );
    }
);

/* TOGGLE PASSWORD */

function togglePassword(
    inputId,
    buttonId
){

    const input =
        document.getElementById(
            inputId
        );

    const button =
        document.getElementById(
            buttonId
        );

    const icon =
        button.querySelector("i");

    button.addEventListener(
        "click",
        ()=>{

            if(
                input.type ===
                "password"
            ){

                input.type = "text";

                icon.classList.remove(
                    "fa-eye"
                );

                icon.classList.add(
                    "fa-eye-slash"
                );
            }

            else{

                input.type = "password";

                icon.classList.remove(
                    "fa-eye-slash"
                );

                icon.classList.add(
                    "fa-eye"
                );
            }
        }
    );
}

togglePassword(
    "login-password",
    "login-show-password"
);

togglePassword(
    "signup-password",
    "signup-show-password"
);

togglePassword(
    "confirm-password",
    "confirm-show-password"
);

/* PASSWORD STRENGTH */

const signupPassword =
    document.getElementById(
        "signup-password"
    );

signupPassword.addEventListener(
    "input",
    ()=>{

        const password =
            signupPassword.value;

        if(password.length < 6){

            signupPassword.style.borderColor =
                "#EF4444";
        }

        else{

            signupPassword.style.borderColor =
                "#22D3EE";
        }
    }
);

/* CONFIRM PASSWORD */

const confirmPasswordInput =
    document.getElementById(
        "confirm-password"
    );

confirmPasswordInput.addEventListener(
    "input",
    ()=>{

        if(
            confirmPasswordInput.value ===
            signupPassword.value
        ){

            confirmPasswordInput.style.borderColor =
                "#22D3EE";
        }

        else{

            confirmPasswordInput.style.borderColor =
                "#EF4444";
        }
    }
);

/* SIGNUP */

signupForm.addEventListener(
    "submit",
    async (e)=>{

        e.preventDefault();

        const email =
            signupForm
            .querySelectorAll("input")[1]
            .value
            .trim();

        const password =
            document.getElementById(
                "signup-password"
            ).value;

        const confirmPassword =
            document.getElementById(
                "confirm-password"
            ).value;

        const signupButton =
            signupForm.querySelector(
                "button"
            );

        if(
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ){

            showToast(
                "No inputs added!"
            );

            return;
        }

        if(!isValidEmail(email)){

            showToast(
                "Enter valid email!"
            );

            return;
        }

        if(password !== confirmPassword){

            showToast(
                "Passwords do not match!"
            );

            return;
        }

        signupButton.textContent =
            "Creating Account...";

        signupButton.disabled =
            true;

        try{

            await setPersistence(
                auth,
                browserLocalPersistence
            );

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            await createUserDocument(
                userCredential.user
            );

            showToast(
                "Account Created!"
            );

            signupForm.reset();

            signupButton.textContent =
                "Create Account";

            signupButton.disabled =
                false;

            setTimeout(()=>{

                window.location.href =
                    "./pages/dashboard.html";

            }, 1000);

        }

        catch(error){

            signupButton.textContent =
                "Create Account";

            signupButton.disabled =
                false;

            if(
                error.code ===
                "auth/email-already-in-use"
            ){

                showToast(
                    "Account already exists!"
                );
            }

            else if(
                error.code ===
                "auth/weak-password"
            ){

                showToast(
                    "Weak password!"
                );
            }

            else{

                showToast(
                    "Signup failed!"
                );
            }
        }
    }
);

/* LOGIN */

loginForm.addEventListener(
    "submit",
    async (e)=>{

        e.preventDefault();

        const email =
            loginForm
            .querySelector(
                'input[type="email"]'
            )
            .value
            .trim();

        const password =
            document.getElementById(
                "login-password"
            ).value;

        const rememberMe =
    document.getElementById(
        "remember-me"
    ).checked;

        const loginButton =
            loginForm.querySelector(
                "button"
            );

        if(
            email === "" ||
            password === ""
        ){

            showToast(
                "No inputs added!"
            );

            return;
        }

        if(!isValidEmail(email)){

            showToast(
                "Invalid email!"
            );

            return;
        }

        loginButton.textContent =
            "Logging In...";

        loginButton.disabled =
            true;

        try{

            if(rememberMe){

                await setPersistence(
                    auth,
                    browserLocalPersistence
                );
            }

            else{

                await setPersistence(
                    auth,
                    browserSessionPersistence
                );
            }

            const userCredential =
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            await createUserDocument(
                userCredential.user
            );

            showToast(
                "Login Successful!"
            );

            loginButton.textContent =
                "Login";

            loginButton.disabled =
                false;

            setTimeout(()=>{

                window.location.href =
                    "./pages/dashboard.html";

            }, 1000);

        }

        catch(error){

            loginButton.textContent =
                "Login";

            loginButton.disabled =
                false;

            showToast(
                "Invalid credentials!"
            );
        }
    }
);

/* RESET PASSWORD */

forgotPasswordBtn.addEventListener(
    "click",
    async ()=>{

        const email =
            loginForm
            .querySelector(
                'input[type="email"]'
            )
            .value
            .trim();

        if(email === ""){

            showToast(
                "Enter email first!"
            );

            return;
        }

        try{

            await sendPasswordResetEmail(
                auth,
                email
            );

            showToast(
                "Reset email sent!"
            );

        }

        catch(error){

            showToast(
                "Reset failed!"
            );
        }
    }
);

/* GOOGLE AUTH */

async function googleAuth(){

    try{

        await setPersistence(
            auth,
            browserLocalPersistence
        );

        const result =
            await signInWithPopup(
                auth,
                provider
            );

        await createUserDocument(
            result.user
        );

        showToast(
            "Google Login Successful!"
        );

        setTimeout(()=>{

            window.location.href =
                "./pages/dashboard.html";

        }, 1000);

    }

    catch(error){

        showToast(
            "Google login failed!"
        );
    }
}

googleLoginBtn.addEventListener(
    "click",
    googleAuth
);

googleSignupBtn.addEventListener(
    "click",
    googleAuth
);