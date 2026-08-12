importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDpNzhJKynYeNlO_lZ8m8ZtAn18jYjAhxg",
  authDomain: "smart-canteen-39eaf.firebaseapp.com",
  projectId: "smart-canteen-39eaf",
  storageBucket: "smart-canteen-39eaf.firebasestorage.app",
  messagingSenderId: "370854356087",
  appId: "1:370854356087:web:b1959139afe66202c79272"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

    self.registration.showNotification(
        payload.notification.title,
        {
            body: payload.notification.body,
            icon: "canteen.png"
        }
    );

});