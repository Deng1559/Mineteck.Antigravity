'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { ShieldCheck, Loader2, ChevronRight, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    // Legal State
    const [fullName, setFullName] = useState("");
    const [entityName, setEntityName] = useState("");
    const [isAccredited, setIsAccredited] = useState(false);

    // Credential State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAccredited) {
            setError("You must certify that you are an accredited investor to proceed.");
            return;
        }
        setLoading(true);
        setError("");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: fullName });

            // Check for special admin registration
            const isAdminRegistration = email.toLowerCase() === 'admin@cleangold.com';
            const isAuditorRegistration = email.toLowerCase() === 'auditor@cleangold.com';
            let userRole = 'investor';
            if (isAdminRegistration) userRole = 'admin';
            if (isAuditorRegistration) userRole = 'auditor';

            const ndaSigned = isAdminRegistration || isAuditorRegistration;

            // Create user profile in Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                displayName: fullName,
                entityName: entityName,
                role: userRole,
                isAccredited: true,
                ndaSigned: ndaSigned,
                createdAt: new Date().toISOString()
            });

            router.push('/dashboard');
        } catch (err: any) {
            setError(err.message || "Failed to create account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-[#1a1a1a] border border-[#333] p-8 rounded-lg shadow-2xl relative overflow-hidden"
            >
                <div className="mb-8 text-center">
                    <ShieldCheck className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white tracking-widest">CLEAN GOLD</h1>
                    <p className="text-[#888] text-sm mt-2">Investor Access Registration</p>
                </div>

                {error && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 bg-red-900/20 border border-red-900 text-red-500 rounded text-sm flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 shrink-0" />
                        <span>{error}</span>
                    </motion.div>
                )}

                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-mono">Full Name</label>
                        <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-black/50 border border-[#333] p-3 text-white text-sm focus:border-[#d4af37] transition-colors outline-none"
                            placeholder="ENTER LEGAL NAME"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-mono">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-[#333] p-3 text-white text-sm focus:border-[#d4af37] transition-colors outline-none"
                            placeholder="ENTER EMAIL"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-mono">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-[#333] p-3 text-white text-sm focus:border-[#d4af37] transition-colors outline-none"
                            placeholder="ENTER PASSWORD"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="accredited"
                            checked={isAccredited}
                            onChange={(e) => setIsAccredited(e.target.checked)}
                            className="w-4 h-4 bg-black border border-[#333] rounded"
                        />
                        <label htmlFor="accredited" className="text-xs text-[#888] uppercase tracking-tighter">I certify I am an accredited investor</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full group relative flex items-center justify-center gap-3 bg-[#d4af37] hover:bg-[#b8962d] text-black font-bold py-4 px-6 transition-all duration-300 overflow-hidden"
                    >
                        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        <span className="tracking-widest">REGISTER & SIGN NDA</span>
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
