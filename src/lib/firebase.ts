import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    "projectId": "clean-gold-agravity-3918-377d7",
    "appId": "1:399819048600:web:4fa16c337d82890404b2ed",
    "apiKey": "AIzaSyAmj1kn-_542OMjjQHv8E1R7HeuDdA6WTA",
    "authDomain": "clean-gold-agravity-3918-377d7.firebaseapp.com",
    "storageBucket": "clean-gold-agravity-3918-377d7.firebasestorage.app",
};

// Singleton pattern to prevent multiple initializations in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app, "mineteck2");
const storage = getStorage(app);

export { app, auth, db, storage };
