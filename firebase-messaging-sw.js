importScripts(
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js"
);

importScripts(
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
    apiKey: "AIzaSyDbmmHXlulqgUxqzbn7iGeywHMdEraDO2Y",
    authDomain: "student-area-2dd83.firebaseapp.com",
    projectId: "student-area-2dd83",
    storageBucket: "student-area-2dd83.firebasestorage.app",
    messagingSenderId: "601486438219",
    appId: "1:601486438219:web:ac9e234cc153b9cd59c2ce"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Background message:",
        payload
    );

    const notificationTitle =
        payload.notification?.title ||
        "TimesTech College";

    const notificationOptions = {
        body:
            payload.notification?.body ||
            "You have a new notification.",
        icon:
            "/TIMESTECH-COLLEGE/images/timescollege.png"
    };

    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});