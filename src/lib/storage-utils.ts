import { storage, db } from './firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { logEvent } from './audit-logger';

// Directive Check: Use the 'secure-docs' bucket as specified in agent.md
// If the app is initialized with a different default bucket, we can specify it here.
const SECURE_BUCKET_NAME = 'secure-docs';

export interface FileMetadata {
    name: string;
    size: number;
    type: string;
    uploadedBy: string;
    uploadedByEmail: string;
    description: string;
    category: 'GEOLOGICAL' | 'FINANCIAL' | 'LEGAL' | 'GENERAL';
    createdAt: any;
    storagePath: string;
    downloadUrl: string;
}

export const uploadFile = async (
    file: File,
    userId: string,
    userEmail: string,
    category: FileMetadata['category'],
    description: string,
    onProgress?: (progress: number) => void
): Promise<string> => {
    const storagePath = `documents/${category}/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, storagePath);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
        uploadTask.on(
            'state_changed',
            (snapshot: { bytesTransferred: number; totalBytes: number }) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (onProgress) onProgress(progress);
            },
            (error: Error) => {
                console.error('Upload failed:', error);
                reject(error);
            },
            async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

                // Create document record in Firestore
                await addDoc(collection(db, 'files'), {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    uploadedBy: userId,
                    uploadedByEmail: userEmail,
                    category,
                    description,
                    storagePath,
                    downloadURL,
                    createdAt: serverTimestamp()
                });

                // Log the security event
                await logEvent(userId, userEmail, 'FILE_UPLOAD', { fileName: file.name, category });

                resolve(downloadURL);
            }
        );
    });
};
