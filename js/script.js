import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
} from "./firebase.js";

/* EMAIL VALIDATION */

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* TOAST */

function showToast(message) {
  const toast =
    document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* TAB ELEMENTS */

const loginTab =
  document.getElementById("login-tab");

const signupTab =
  document.getElementById("signup-tab");

/* FORM ELEMENTS */

const loginForm =
  document.getElementById("login-form");

const signupForm =
  document.getElementById("signup-form");

/* AUTH CARD */

const authCard =
  document.querySelector(".auth-card");

/* GOOGLE BUTTONS */

const googleLoginBtn =
  document.getElementById("google-login");

const googleSignupBtn =
  document.getElementById("google-signup");

/* FORGOT PASSWORD */

const forgotPasswordBtn =
  document.getElementById("forgot-password");

/* TAB SWITCHING */

loginTab.addEventListener("click", () => {

  loginForm.classList.remove("hidden");

  signupForm.classList.add("hidden");

  loginTab.classList.add("active-tab");

  signupTab.classList.remove("active-tab");

  authCard.scrollTop = 0;
});

signupTab.addEventListener("click", () => {

  signupForm.classList.remove("hidden");

  loginForm.classList.add("hidden");

  signupTab.classList.add("active-tab");

  loginTab.classList.remove("active-tab");

  authCard.scrollTop = 0;
});

/* SHOW / HIDE PASSWORD */

function togglePassword(inputId, buttonId) {

  const input =
    document.getElementById(inputId);

  const button =
    document.getElementById(buttonId);

  const icon =
    button.querySelector("i");

  button.addEventListener("click", () => {

    if(input.type === "password") {

      input.type = "text";

      icon.classList.remove("fa-eye");

      icon.classList.add("fa-eye-slash");

    }

    else {

      input.type = "password";

      icon.classList.remove("fa-eye-slash");

      icon.classList.add("fa-eye");
    }

  });

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
  document.getElementById("signup-password");

signupPassword.addEventListener("input", () => {

  const password =
    signupPassword.value;

  if(password.length < 6) {

    signupPassword.style.borderColor =
      "#EF4444";
  }

  else {

    signupPassword.style.borderColor =
      "#22D3EE";
  }

});

/* CONFIRM PASSWORD MATCH */

const confirmPasswordInput =
  document.getElementById("confirm-password");

confirmPasswordInput.addEventListener("input", () => {

  if(
    confirmPasswordInput.value ===
    signupPassword.value
  ) {

    confirmPasswordInput.style.borderColor =
      "#22D3EE";
  }

  else {

    confirmPasswordInput.style.borderColor =
      "#EF4444";
  }

});

/* SIGN UP */

signupForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const email =
      signupForm
      .querySelectorAll("input")[1]
      .value;

    const password =
      document.getElementById(
        "signup-password"
      ).value;

    const confirmPassword =
      document.getElementById(
        "confirm-password"
      ).value;

    const signupButton =
      signupForm.querySelector("button");

    if(
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {

      showToast("No inputs added!");

      return;
    }

    if(!isValidEmail(email)) {

      showToast(
        "Enter a valid email address!"
      );

      return;
    }

    if(password !== confirmPassword) {

      showToast(
        "Passwords do not match!"
      );

      return;
    }

    signupButton.innerText =
      "Creating Account...";

    signupButton.disabled = true;

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      showToast(
        "Account Created Successfully!"
      );

      signupForm.reset();

      signupButton.innerText =
        "Create Account";

      signupButton.disabled = false;

      loginTab.click();

    }

    catch(error) {

      signupButton.innerText =
        "Create Account";

      signupButton.disabled = false;

      if(
        error.code ===
        "auth/email-already-in-use"
      ) {

        showToast(
          "Account already exists!"
        );
      }

      else if(
        error.code ===
        "auth/weak-password"
      ) {

        showToast(
          "Password must be at least 6 characters!"
        );
      }

      else if(
        error.code ===
        "auth/invalid-email"
      ) {

        showToast(
          "Invalid email address!"
        );
      }

      else {

        showToast("Signup failed!");
      }

    }

  }
);

/* LOGIN */

loginForm.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    const email =
      loginForm.querySelector(
        'input[type="email"]'
      ).value;

    const password =
      document.getElementById(
        "login-password"
      ).value;

    const rememberMe =
      document.querySelector(
        ".remember-label input"
      ).checked;

    const loginButton =
      loginForm.querySelector("button");

    if(
      email === "" ||
      password === ""
    ) {

      showToast("No inputs added!");

      return;
    }

    if(!isValidEmail(email)) {

      showToast(
        "Enter a valid email address!"
      );

      return;
    }

    loginButton.innerText =
      "Logging In...";

    loginButton.disabled = true;

    try {

      if(rememberMe) {

        await setPersistence(
          auth,
          browserLocalPersistence
        );
      }

      else {

        await setPersistence(
          auth,
          browserSessionPersistence
        );
      }

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      showToast(
        "Login Successful!"
      );

      loginForm.reset();

      loginButton.innerText =
        "Login";

      loginButton.disabled = false;

      setTimeout(() => {

        window.location.href =
          "dashboard.html";

      }, 1200);

    }

    catch(error) {

      console.log(error.code);

      loginButton.innerText =
        "Login";

      loginButton.disabled = false;

      if(
        error.code ===
        "auth/user-not-found" ||

        error.code ===
        "auth/invalid-credential"
      ) {

        showToast(
          "Account does not exist or credentials are incorrect!"
        );
      }

      else if(
        error.code ===
        "auth/wrong-password"
      ) {

        showToast(
          "Incorrect password!"
        );
      }

      else if(
        error.code ===
        "auth/invalid-email"
      ) {

        showToast(
          "Invalid email address!"
        );
      }

      else {

        showToast("Login failed!");
      }

    }

  }
);

/* FORGOT PASSWORD */

forgotPasswordBtn.addEventListener(
  "click",
  async () => {

    const email =
      loginForm.querySelector(
        'input[type="email"]'
      ).value;

    if(email === "") {

      showToast(
        "Enter your email first!"
      );

      return;
    }

    if(!isValidEmail(email)) {

      showToast(
        "Enter a valid email!"
      );

      return;
    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      showToast(
        "Password reset email sent!"
      );

    }

    catch(error) {

      showToast(
        "Failed to send reset email!"
      );
    }

  }
);

/* GOOGLE AUTH */

const googleProvider =
  new GoogleAuthProvider();

async function googleAuth() {

  try {

    await signInWithPopup(
      auth,
      googleProvider
    );

    showToast(
      "Google Login Successful!"
    );

    setTimeout(() => {

      window.location.href =
        "dashboard.html";

    }, 1200);

  }

  catch(error) {

    showToast(error.message);
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