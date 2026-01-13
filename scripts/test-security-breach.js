const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, addDoc } = require('firebase/firestore');

const firebaseConfig = {
    projectId: "clean-gold-agravity-3918-377d7",
    appId: "1:399819048600:web:4fa16c337d82890404b2ed",
    storageBucket: "clean-gold-agravity-3918-377d7.firebasestorage.app",
    apiKey: "AIzaSyAmj1kn-_542OMjjQHv8E1R7HeuDdA6WTA",
    authDomain: "clean-gold-agravity-3918-377d7.firebaseapp.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testSecurityBreach() {
    console.log("Starting Security Breach Test (Unauthenticated Access)...");

    let tests = {
        readFiles: false,
        readAuditLogs: false,
        writeFiles: false
    };

    // Test 1: Try to read protected 'files' collection
    try {
        console.log("[BREACH ATTEMPT] Reading 'files' collection...");
        await getDocs(collection(db, 'files'));
        console.log("FAILED: Unauthenticated user COULD read files.");
        tests.readFiles = false;
    } catch (error) {
        if (error.code === 'permission-denied') {
            console.log("SUCCESS: Access denied for 'files' read.");
            tests.readFiles = true;
        } else {
            console.log("ERROR: Unexpected error:", error.code);
        }
    }

    // Test 2: Try to read 'audit_logs'
    try {
        console.log("[BREACH ATTEMPT] Reading 'audit_logs' collection...");
        await getDocs(collection(db, 'audit_logs'));
        console.log("FAILED: Unauthenticated user COULD read audit_logs.");
        tests.readAuditLogs = false;
    } catch (error) {
        if (error.code === 'permission-denied') {
            console.log("SUCCESS: Access denied for 'audit_logs' read.");
            tests.readAuditLogs = true;
        } else {
            console.log("ERROR: Unexpected error:", error.code);
        }
    }

    // Test 3: Try to write to 'files'
    try {
        console.log("[BREACH ATTEMPT] Writing to 'files' collection...");
        await addDoc(collection(db, 'files'), {
            name: "HACKED.txt",
            uploadedBy: "hacker"
        });
        console.log("FAILED: Unauthenticated user COULD write to files.");
        tests.writeFiles = false;
    } catch (error) {
        if (error.code === 'permission-denied') {
            console.log("SUCCESS: Access denied for 'files' write.");
            tests.writeFiles = true;
        } else {
            console.log("ERROR: Unexpected error:", error.code);
        }
    }

    if (tests.readFiles && tests.readAuditLogs && tests.writeFiles) {
        console.log("ALL SECURITY TESTS PASSED: System is secure against unauthenticated access.");
        process.exit(0);
    } else {
        console.error("SECURITY TEST FAILED: Some protections are missing.");
        process.exit(1);
    }
}

testSecurityBreach();
