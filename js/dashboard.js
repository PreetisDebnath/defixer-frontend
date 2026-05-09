import {
    auth
}
from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

/* LUCIDE */

lucide.createIcons();

/* DOM ELEMENTS */

const username =
    document.getElementById("username");

const profileAvatar =
    document.getElementById("profileAvatar");

const dropdownAvatar =
    document.getElementById("dropdownAvatar");

const dropdownName =
    document.getElementById("dropdownName");

const dropdownEmail =
    document.getElementById("dropdownEmail");

const profileToggle =
    document.getElementById("profileToggle");

const profileDropdown =
    document.getElementById("profileDropdown");

const logoutBtn =
    document.getElementById("logoutBtn");

const dropdownLogout =
    document.getElementById("dropdownLogout");

const xpFill =
    document.getElementById("xpFill");

const counters =
    document.querySelectorAll(".counter");

const activeIndicator =
    document.querySelector(".active-indicator");

const navItems =
    document.querySelectorAll(".nav-item");

/* DEFAULT USER */

const defaultAvatar =
    "../assets/icons/avatar.jpg";

/* AUTH PROTECTION */

onAuthStateChanged(auth, (user)=>{

    if(user){

        loadUserData(user);

    }else{

        window.location.href =
            "../index.html";
    }
});

/* LOAD USER DATA */

function loadUserData(user){

    const displayName =
        user.displayName || "Developer";

    const email =
        user.email || "No Email";

    const avatar =
        user.photoURL || defaultAvatar;

    username.innerHTML =
        `${displayName} 👋`;

    dropdownName.innerHTML =
        displayName;

    dropdownEmail.innerHTML =
        email;

    profileAvatar.src =
        avatar;

    dropdownAvatar.src =
        avatar;
}

/* PROFILE DROPDOWN */

profileToggle.addEventListener("click", ()=>{

    profileDropdown.classList.toggle("active");
});

/* CLOSE DROPDOWN */

window.addEventListener("click", (e)=>{

    if(
        !profileToggle.contains(e.target)
        &&
        !profileDropdown.contains(e.target)
    ){

        profileDropdown.classList.remove("active");
    }
});

/* LOGOUT */

async function logoutUser(){

    try{

        await signOut(auth);

        window.location.href =
            "../index.html";

    }catch(error){

        console.log(error);
    }
}

logoutBtn.addEventListener(
    "click",
    logoutUser
);

dropdownLogout.addEventListener(
    "click",
    logoutUser
);

/* COUNTER ANIMATION */

function animateCounter(counter){

    const target =
        +counter.dataset.target;

    let current = 0;

    const increment =
        target / 80;

    const updateCounter = ()=>{

        current += increment;

        if(current < target){

            counter.innerText =
                Math.floor(current);

            requestAnimationFrame(
                updateCounter
            );

        }else{

            counter.innerText =
                target;
        }
    };

    updateCounter();
}

counters.forEach((counter)=>{

    animateCounter(counter);
});

/* XP ANIMATION */

setTimeout(()=>{

    xpFill.style.width =
        "60%";

}, 400);

/* SIDEBAR ACTIVE INDICATOR */

navItems.forEach((item, index)=>{

    item.addEventListener("click", ()=>{

        navItems.forEach((nav)=>{

            nav.classList.remove("active");
        });

        item.classList.add("active");

        moveIndicator(index);
    });
});

function moveIndicator(index){

    const topPosition =
        index * 64 + 8;

    activeIndicator.style.top =
        `${topPosition}px`;
}

/* INITIAL POSITION */

moveIndicator(0);

/* CARD FLOAT EFFECT */

const cards =
    document.querySelectorAll(
        ".stat-card, .dashboard-card"
    );

cards.forEach((card)=>{

    card.addEventListener("mousemove", (e)=>{

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background =
        `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(34,211,238,0.08),
            rgba(255,255,255,0.02)
        )
        `;
    });

    card.addEventListener("mouseleave", ()=>{

        card.style.background =
        `
        linear-gradient(
            145deg,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.015)
        )
        `;
    });
});

/* STREAK GLOW */

const streakCard =
    document.querySelector(".streak-card");

setInterval(()=>{

    streakCard.style.boxShadow =
        "0 0 28px rgba(249,115,22,0.16)";

    setTimeout(()=>{

        streakCard.style.boxShadow =
            "";

    }, 700);

}, 2500);