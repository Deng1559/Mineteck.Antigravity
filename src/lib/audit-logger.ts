import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export type AuditAction =
    | 'LOGIN_SUCCESS'
    | 'LOGIN_FAILURE'
    | 'FILE_UPLOAD'
    | 'FILE_DOWNLOAD'
    | 'NDA_SIGN'
    | 'SECURITY_ALERT';

export interface AuditEntry {
    userId: string;
    userEmail: string;
    action: AuditAction;
    metadata?: any;
    timestamp: any;
}

export const logEvent = async (
    userId: string,
    userEmail: string,
    action: AuditAction,
    metadata: any = {}
) => {
    try {
        await addDoc(collection(db, 'audit_logs'), {
            userId,
            userEmail,
            action,
            metadata,
            timestamp: serverTimestamp()
        });
    } catch (error) {
        console.error('Failed to log audit event:', error);
    }
};
