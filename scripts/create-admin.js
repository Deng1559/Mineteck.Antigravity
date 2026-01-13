const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

const firebaseConfig = {
    projectId: "clean-gold-agravity-3918-377d7",
    appId: "1:399819048600:web:4fa16c337d82890404b2ed",
    storageBucket: "clean-gold-agravity-3918-377d7.firebasestorage.app",
    apiKey: "AIzaSyAmj1kn-_542OMjjQHv8E1R7HeuDdA6WTA",
    authDomain: "clean-gold-agravity-3918-377d7.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createAdmin() {
    const email = "admin@cleangold.com";
    constpassword = "andrewtaylor";

    console.log(`Attempting to create user: ${email}`);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, constpassword);
        const user = userCredential.user;
        console.log(`User created in Auth with UID: ${user.uid}`);

        console.log("Creating user document in Firestore...");
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            displayName: "Admin User",
            entityName: "Minetek HQ",
            role: "admin",
            isAccredited: true,
            ndaSigned: true,
            createdAt: new Date().toISOString()
        });

        console.log("SUCCESS: Admin user created and Firestore document initialized.");
        process.exit(0);
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            console.log("User already exists. Skipping creation.");
            process.exit(0);
        } else {
            console.error("ERROR FAILED:", error.code, error.message);
            process.exit(1);
        }
    }
}

createAdmin();
