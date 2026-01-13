'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { ShieldCheck, Loader2, ChevronRight, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/dashboard');
        } catch (err: any) {
            setError('Invalid credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md p-8 bg-[#1a1a1a] border border-[#333] rounded-lg shadow-2xl"
            >
                <div className="text-center mb-8">
                    <ShieldCheck className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                    <h1 className="text-xl font-bold tracking-[0.2em] text-white">INVESTOR ACCESS PORTAL</h1>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-900/20 border border-red-900 text-red-500 text-xs flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-mono">Terminal ID</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER EMAIL"
                            className="w-full bg-black/50 border border-[#333] p-3 text-white text-sm focus:border-[#d4af37] outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#d4af37] mb-2 font-mono">Security Key</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="ENTER PASSWORD"
                            className="w-full bg-black/50 border border-[#333] p-3 text-white text-sm focus:border-[#d4af37] outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#d4af37] hover:bg-[#b8962d] text-black font-bold py-4 transition-all tracking-widest flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        AUTHENTICATE
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
