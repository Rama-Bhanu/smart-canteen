import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
//import { getMessaging } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpNzhJKynYeNlO_lZ8m8ZtAn18jYjAhxg",
  authDomain: "smart-canteen-39eaf.firebaseapp.com",
  projectId: "smart-canteen-39eaf",
  storageBucket: "smart-canteen-39eaf.firebasestorage.app",
  messagingSenderId: "370854356087",
  appId: "1:370854356087:web:b1959139afe66202c79272",
  measurementId: "G-VJ5XQSTYYN"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
//const messaging = getMessaging(app);

export { db, auth};