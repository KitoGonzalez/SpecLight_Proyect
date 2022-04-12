// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
    apiKey: "AIzaSyDWIWgBTpwOKGL0ArpxBXQKK4B-mz8Tk50",
    authDomain: "speclightproyect.firebaseapp.com",
    projectId: "speclightproyect",
    storageBucket: "speclightproyect.appspot.com",
    messagingSenderId: "819449517550",
    appId: "1:819449517550:web:a35fa8c5965f911aa7aaff",
    measurementId: "G-NPQVT9V1QR"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const db = getFirestore(app);