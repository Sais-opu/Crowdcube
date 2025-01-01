// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANsZ1TUAIgUDngWc7GZONukj9ryJprTQg",
    authDomain: "crowdcube-61140.firebaseapp.com",
    projectId: "crowdcube-61140",
    storageBucket: "crowdcube-61140.firebasestorage.app",
    messagingSenderId: "1016750571541",
    appId: "1:1016750571541:web:f1c382f331ed6e51448e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;