const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc, getDoc } = require('firebase/firestore');

const firebaseConfig = {
    projectId: "clean-gold-agravity-3918-377d7",
    appId: "1:399819048600:web:4fa16c337d82890404b2ed",
    storageBucket: "clean-gold-agravity-3918-377d7.appspot.com",
    apiKey: "AIzaSyAmj1kn-_542OMjjQHv8E1R7HeuDdA6WTA",
    authDomain: "clean-gold-agravity-3918-377d7.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app, "mineteck2");

async function fixAdminUser() {
    console.log("Starting Admin User Repair...");

    try {
        // 1. Authenticate
        const email = "admin@cleangold.com";
        const password = "andrewtaylor";
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(`[AUTH] Logged in as: ${user.email} (${user.uid})`);

        // 2. Check if User Document Exists
        const userDocRef = doc(db, "users", user.uid);
        console.log(`[FIRESTORE] Checking document: users/${user.uid}`);

        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
            console.log("[FIRESTORE] User document ALREADY EXISTS:", docSnap.data());
        } else {
            console.log("[FIRESTORE] User document MISSING. Creating it now...");
            await setDoc(userDocRef, {
                uid: user.uid,
                email: user.email,
                displayName: "Admin User",
                entityName: "Minetek HQ",
                role: "admin",
                isAccredited: true,
                ndaSigned: true,
                createdAt: new Date().toISOString()
            });
            console.log("[FIRESTORE] User document CREATED successfully.");
        }
        process.exit(0);

    } catch (error) {
        console.error("ERROR:", error.code, error.message);
        if (error.code === 'unimplemented' || error.message.includes('NOT_FOUND')) {
            console.error("\nCRITICAL: Firestore Database instance appears to be MISSING or unreachable.");
        }
        process.exit(1);
    }
}

fixAdminUser();
