/* FIREBASE */

import {

    auth,

    signOut,

    onAuthStateChanged,

    createUserDocument,

    subscribeToUserData,

    getRecentActivities,

    getAchievements,

    XP_PER_LEVEL,

    calculateLevelXP

}
from "./firebase.js";

/* LUCIDE */

lucide.createIcons();

/* DOM ELEMENTS */

const dashboardContainer =
    document.querySelector(
        ".dashboard-container"
    );

const dashboardLoader =
    document.getElementById(
        "dashboardLoader"
    );

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

/* STATS */

const questionsSolved =
    document.getElementById(
        "questionsSolved"
    );

const accuracyPercent =
    document.getElementById(
        "accuracyPercent"
    );

const dayStreak =
    document.getElementById(
        "dayStreak"
    );

const achievementCount =
    document.getElementById(
        "achievementCount"
    );

/* XP */

const levelText =
    document.getElementById(
        "levelText"
    );

const xpText =
    document.getElementById(
        "xpText"
    );

const xpFill =
    document.getElementById(
        "xpFill"
    );

/* LISTS */

const activityList =
    document.getElementById(
        "activityList"
    );

const achievementList =
    document.getElementById(
        "achievementList"
    );

/* SIDEBAR */

const activeIndicator =
    document.querySelector(
        ".active-indicator"
    );

const navItems =
    document.querySelectorAll(
        ".nav-item"
    );

/* DEFAULT AVATAR */

const defaultAvatar =
    "../assets/icons/avatar.jpg";

/* AUTH PROTECTION */

onAuthStateChanged(
    auth,
    async (user)=>{

        if(user){

            try{

                await createUserDocument(
                    user
                );

                await initializeDashboard(
                    user
                );

                showDashboard();

            }

            catch(error){

                console.log(
                    "Dashboard Init Error:",
                    error
                );
            }
        }

        else{

            window.location.href =
                "../index.html";
        }
    }
);

/* INITIALIZE DASHBOARD */

async function initializeDashboard(
    user
){

    loadProfile(user);

    subscribeToRealtimeData(
        user.uid
    );

    await Promise.all([

        loadRecentActivity(
            user.uid
        ),

        loadAchievements(
            user.uid
        )
    ]);
}

/* SHOW DASHBOARD */

function showDashboard(){

    requestAnimationFrame(()=>{

        if(dashboardContainer){

            dashboardContainer.classList.add(
                "loaded"
            );
        }

        if(dashboardLoader){

            dashboardLoader.classList.add(
                "hidden"
            );

            setTimeout(()=>{

                dashboardLoader.remove();

            }, 400);
        }
    });
}

/* LOAD PROFILE */

function loadProfile(user){

    const displayName =
        user.displayName ||
        "Developer";

    const email =
        user.email ||
        "No Email";

    const avatar =
        user.photoURL ||
        defaultAvatar;

    username.textContent =
        `${displayName} 👋`;

    dropdownName.textContent =
        displayName;

    dropdownEmail.textContent =
        email;

    profileAvatar.src =
        avatar;

    dropdownAvatar.src =
        avatar;
}

/* REALTIME USER DATA */

function subscribeToRealtimeData(
    uid
){

    subscribeToUserData(
        uid,
        (data)=>{

            renderStats(data);

            renderXP(data);
        }
    );
}

/* RENDER STATS */

function renderStats(data){

    questionsSolved.textContent =
        data.solvedQuestions || 0;

    accuracyPercent.textContent =
        `${data.accuracy || 0}%`;

    dayStreak.textContent =
        data.streak || 0;

    achievementCount.textContent =
        data.achievementCount || 0;
}

/* RENDER XP */

function renderXP(data){

    const currentXP =
        calculateLevelXP(
            data.xp || 0
        );

    const progress =
        (
            currentXP /
            XP_PER_LEVEL
        ) * 100;

    levelText.textContent =
        `Level ${data.level || 1}`;

    xpText.textContent =
        `${currentXP} / ${XP_PER_LEVEL} XP`;

    xpFill.style.width =
        `${progress}%`;
}

/* LOAD RECENT ACTIVITY */

async function loadRecentActivity(
    uid
){

    const activities =
        await getRecentActivities(
            uid
        );

    activityList.innerHTML = "";

    if(activities.length === 0){

        activityList.innerHTML =
        `
        <div class="activity-item">

            <div>

                <h4>
                    No activity yet
                </h4>

                <p>
                    Start solving questions
                </p>

            </div>

        </div>
        `;

        return;
    }

    activities.forEach((item)=>{

        activityList.innerHTML +=
        `
        <div class="activity-item">

            <div>

                <h4>
                    ${item.activity}
                </h4>

                <p>
                    Recent
                </p>

            </div>

        </div>
        `;
    });
}

/* LOAD ACHIEVEMENTS */

async function loadAchievements(
    uid
){

    const achievements =
        await getAchievements(
            uid
        );

    achievementList.innerHTML = "";

    if(achievements.length === 0){

        achievementList.innerHTML =
        `
        <div class="achievement-item">

            <h4>
                No achievements yet
            </h4>

            <p>
                Start solving questions
            </p>

        </div>
        `;

        return;
    }

    achievements.forEach((item)=>{

        achievementList.innerHTML +=
        `
        <div class="achievement-item">

            <h4>
                🏆 ${item.title}
            </h4>

            <p>
                ${item.description}
            </p>

        </div>
        `;
    });
}

/* PROFILE DROPDOWN */

if(profileToggle){

    profileToggle.addEventListener(
        "click",
        (e)=>{

            e.stopPropagation();

            profileDropdown.classList.toggle(
                "active"
            );
        }
    );
}

/* CLOSE DROPDOWN */

window.addEventListener(
    "click",
    (e)=>{

        if(
            profileDropdown &&
            profileToggle &&
            !profileToggle.contains(
                e.target
            )
            &&
            !profileDropdown.contains(
                e.target
            )
        ){

            profileDropdown.classList.remove(
                "active"
            );
        }
    }
);

/* ESC KEY CLOSE */

window.addEventListener(
    "keydown",
    (e)=>{

        if(
            e.key === "Escape"
            &&
            profileDropdown
        ){

            profileDropdown.classList.remove(
                "active"
            );
        }
    }
);

/* LOGOUT */

async function logoutUser(){

    try{

        await signOut(auth);

        window.location.href =
            "../index.html";
    }

    catch(error){

        console.log(
            "Logout Error:",
            error
        );
    }
}

if(logoutBtn){

    logoutBtn.addEventListener(
        "click",
        logoutUser
    );
}

if(dropdownLogout){

    dropdownLogout.addEventListener(
        "click",
        logoutUser
    );
}

/* SIDEBAR INDICATOR */

navItems.forEach(
    (item, index)=>{

        item.addEventListener(
            "click",
            ()=>{

                navItems.forEach(
                    (nav)=>{

                        nav.classList.remove(
                            "active"
                        );
                    }
                );

                item.classList.add(
                    "active"
                );

                moveIndicator(index);
            }
        );
    }
);

function moveIndicator(index){

    if(
        !activeIndicator ||
        window.innerWidth <= 950
    ){
        return;
    }

    const topPosition =
        index * 64 + 8;

    activeIndicator.style.top =
        `${topPosition}px`;
}

moveIndicator(0);

/* CARD HOVER EFFECT */

const cards =
    document.querySelectorAll(
        ".stat-card, .dashboard-card"
    );

cards.forEach((card)=>{

    const originalBackground =
        window.getComputedStyle(card)
        .background;

    card.dataset.originalBackground =
        originalBackground;

    card.addEventListener(
        "mousemove",
        (e)=>{

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
            ),
            ${card.dataset.originalBackground}
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.background =
                card.dataset.originalBackground;
        }
    );
});

/* STREAK GLOW */

const streakCard =
    document.querySelector(
        ".streak-card"
    );

if(streakCard){

    setInterval(()=>{

        streakCard.style.boxShadow =
            "0 0 28px rgba(249,115,22,0.16)";

        setTimeout(()=>{

            streakCard.style.boxShadow =
                "";

        }, 700);

    }, 2500);
}