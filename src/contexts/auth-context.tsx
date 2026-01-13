'use client';

import { createContext, useEffect, useState, useContext } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

interface UserProfile {
    uid: string;
    email: string;
    role: 'admin' | 'investor' | 'auditor';
    ndaSigned: boolean;
    isAccredited: boolean;
    displayName: string;
    entityName?: string;
    createdAt: string;
}

interface AuthContextType {
    user: User | null;
    userProfile: UserProfile | null;
    loading: boolean;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    userProfile: null,
    loading: true,
    logout: async () => { }
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);

            if (firebaseUser) {
                const docRef = doc(db, "users", firebaseUser.uid);
                const unsubProfile = onSnapshot(docRef, (doc) => {
                    if (doc.exists()) {
                        setUserProfile(doc.data() as UserProfile);
                    } else {
                        setUserProfile(null);
                    }
                    setLoading(false);
                }, (error) => {
                    console.error("Profile snapshot error:", error);
                    setLoading(false);
                });

                return () => unsubProfile();
            } else {
                setUserProfile(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, userProfile, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
