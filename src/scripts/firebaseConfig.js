// Import the functions you need from the SDKs you need
var firebase = require('firebase/app');
import { getFirestore } from "firebase/firestore";

import { addDoc, collection } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyClWkOoQrsepqOta28ER3dMQK68yuIM_Rg",
  authDomain: "landingpageemails-30892.firebaseapp.com",
  projectId: "landingpageemails-30892",
  storageBucket: "landingpageemails-30892.appspot.com",
  messagingSenderId: "104689015113",
  appId: "1:104689015113:web:a05b18d1c7344d070f2298",
  measurementId: "G-YX9S46FV7G",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= getFirestore();


// Email Entry pop-up
const joinNow = document.getElementById("join-btn");
joinNow.addEventListener("click",()=>{
    const overlay = document.getElementById("mail-entry");
    overlay.classList.remove("overlay-off")
    overlay.classList.add("overlay-on")
})


// Close overlay once X is pressed
const closeBtn = document.getElementById("close-overlay");
closeBtn.addEventListener("click",()=>{
    const overlay = document.getElementById("mail-entry");
    overlay.classList.remove("overlay-on")
    overlay.classList.add("overlay-off")
})


// Submit email. Send email to firebase database
const sendMail = document.getElementById("submit-email");
sendMail.addEventListener("click",()=>{
    const email = document.getElementById("email-input").value;
    console.log(email)
    addDoc(collection(db,"email"),{email: email})
        .catch((err)=>{ console.log(err) });
})