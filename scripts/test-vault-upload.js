const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
// Node.js has built-in fetch

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
const storage = getStorage(app);

async function testVaultUpload() {
    console.log("Starting Vault Upload Logic Test...");

    // 1. Authenticate
    try {
        const email = "admin@cleangold.com";
        const password = "andrewtaylor";
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(`[AUTH] Authenticated as: ${user.email} (${user.uid})`);

        // 2. Create Dummy File
        const fileContent = "CONFIDENTIAL GEOLOGICAL DATA - TEST UPLOAD";
        const fileName = `test_geo_data_${Date.now()}.txt`;
        const buffer = Buffer.from(fileContent); // Node buffer
        // Firebase Storage SDK expects Uint8Array or Blob. Buffer is Uint8Array.

        // 3. Upload to Storage
        const storagePath = `documents/GEOLOGICAL/${fileName}`;
        const storageRef = ref(storage, storagePath);

        console.log(`[STORAGE] Uploading to: ${storagePath}`);
        const snapshot = await uploadBytes(storageRef, buffer);
        console.log(`[STORAGE] Upload successful. Bytes: ${snapshot.bytesTransferred}`);

        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log(`[STORAGE] Download URL generated.`);

        // 4. Create Firestore Metadata
        console.log(`[FIRESTORE] Creating file metadata record...`);
        await addDoc(collection(db, 'files'), {
            name: fileName,
            size: buffer.length,
            type: 'text/plain',
            uploadedBy: user.uid,
            uploadedByEmail: user.email,
            category: 'GEOLOGICAL',
            description: 'Automated QA Test Upload',
            storagePath: storagePath,
            downloadURL: downloadURL,
            createdAt: serverTimestamp()
        });
        console.log(`[FIRESTORE] Metadata created.`);

        // 5. Create Audit Log
        console.log(`[AUDIT] Logging event...`);
        await addDoc(collection(db, 'audit_logs'), {
            userId: user.uid,
            userEmail: user.email,
            action: 'FILE_UPLOAD',
            metadata: { fileName, category: 'GEOLOGICAL' },
            timestamp: serverTimestamp()
        });
        console.log(`[AUDIT] Event logged.`);

        console.log("TEST PASSED: Vault Upload Flow Verified.");
        process.exit(0);

    } catch (error) {
        console.error("TEST FAILED:", error);
        process.exit(1);
    }
}

testVaultUpload();
