'use client';

import { useEffect, useState } from 'react';
import { useRequireAuth } from '@/hooks/use-require-auth';
import { useAuth } from '@/hooks/use-auth';
import { Loader2, LogOut, Shield, User, FileText, Download, Lock, ChevronRight } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import AdminUpload from '@/components/admin-upload';
import { motion, AnimatePresence } from 'framer-motion';

interface SecureFile {
    id: string;
    name: string;
    size: number;
    category: string;
    description: string;
    downloadURL: string;
    createdAt: any;
}

export default function DashboardPage() {
    const { user, loading, userProfile } = useRequireAuth();
    const { logout } = useAuth();
    const [files, setFiles] = useState<SecureFile[]>([]);
    const [filesLoading, setFilesLoading] = useState(true);

    useEffect(() => {
        if (!user) return;

        const q = query(collection(db, "files"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot: { docs: any[] }) => {
            const fileList = snapshot.docs.map((doc: { id: string, data: () => any }) => ({
                id: doc.id,
                ...doc.data()
            } as SecureFile));
            setFiles(fileList);
            setFilesLoading(false);
        }, (error: Error) => {
            console.error("Error fetching files:", error);
            setFilesLoading(false);
        });

        return () => unsubscribe();
    }, [user]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-[#d4af37] animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 font-inter">
            {/* Subtle Grid Background */}
            <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="flex justify-between items-center border-b border-slate-800 pb-6 mb-12">
                    <div>
                        <h1 className="text-3xl font-playfair font-bold tracking-widest text-[#d4af37]">CLEAN GOLD TERMINAL</h1>
                        <p className="text-slate-500 text-xs uppercase tracking-[0.4em] mt-1 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
                            Secure Environment: Operational
                        </p>
                    </div>
                    <button
                        onClick={logout}
                        className="group flex items-center gap-2 px-4 py-2 border border-red-900/30 bg-red-900/10 text-xs text-red-500 hover:bg-red-900/20 hover:border-red-900/50 transition-all uppercase tracking-[0.2em]"
                    >
                        <LogOut className="w-4 h-4" />
                        TERMINATE SESSION
                    </button>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Stats / Info */}
                    <div className="space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg backdrop-blur-md">
                            <h2 className="text-[10px] font-mono text-[#d4af37] mb-6 uppercase tracking-[0.3em] border-b border-slate-800 pb-2">User Identity</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-slate-800 rounded">
                                        <User className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Legal Name</p>
                                        <p className="text-sm font-medium">{userProfile?.displayName || 'Unknown'}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-slate-800 rounded">
                                        <Shield className="w-5 h-5 text-[#d4af37]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Access Level</p>
                                        <p className="text-sm font-bold text-[#d4af37] uppercase">{userProfile?.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg backdrop-blur-md">
                            <h2 className="text-[10px] font-mono text-[#10b981] mb-6 uppercase tracking-[0.3em] border-b border-slate-800 pb-2">Live Status</h2>
                            <div className="space-y-4">
                                <div className="p-3 bg-emerald-900/10 border border-emerald-900/20 rounded text-[10px] font-mono text-emerald-500">
                                    {userProfile?.role === 'admin'
                                        ? ">> ADMIN PROTOCOLS ACTIVE. FULL READ/WRITE ACCESS GRANTED TO SECURE-DOCS BUCKET."
                                        : ">> INVESTOR CLEARANCE VERIFIED. ACCESSING PROPRIETARY REPOSITORY..."}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Admin Action Section */}
                        {userProfile?.role === 'admin' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <AdminUpload />
                            </motion.div>
                        )}

                        {/* Document Inventory */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden backdrop-blur-md">
                            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                                <h2 className="text-xs font-mono text-white uppercase tracking-[0.4em]">Proprietary Document Inventory</h2>
                                <span className="text-[10px] text-slate-500 font-mono">COUNT: {files.length}</span>
                            </div>

                            <div className="min-h-[400px]">
                                {filesLoading ? (
                                    <div className="flex items-center justify-center h-48">
                                        <Loader2 className="w-8 h-8 text-slate-700 animate-spin" />
                                    </div>
                                ) : files.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-64 text-slate-600">
                                        <Lock className="w-12 h-12 mb-4 opacity-20" />
                                        <p className="text-xs uppercase tracking-widest font-mono">No sensitive assets matches your clearance</p>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-slate-800">
                                        {files.map((file: SecureFile) => (
                                            <div key={file.id} className="p-6 hover:bg-white/5 transition-colors group flex items-center justify-between">
                                                <div className="flex items-center gap-6">
                                                    <div className="relative">
                                                        <FileText className="w-10 h-10 text-slate-400 group-hover:text-[#d4af37] transition-colors" />
                                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-[10px] font-mono text-[#d4af37] border border-[#d4af37]/30 px-1.5 py-0.5 rounded uppercase tracking-tighter">
                                                                {file.category}
                                                            </span>
                                                            <h3 className="text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors uppercase tracking-tight">
                                                                {file.name}
                                                            </h3>
                                                        </div>
                                                        <p className="text-xs text-slate-500 line-clamp-1 max-w-md">
                                                            {file.description || "No classification notes provided."}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right hidden sm:block">
                                                        <p className="text-[10px] font-mono text-slate-500 uppercase">Size</p>
                                                        <p className="text-xs text-slate-300 font-mono">{(file.size / 1024).toFixed(1)} KB</p>
                                                    </div>
                                                    <a
                                                        href={file.downloadURL}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 border border-slate-700 hover:border-[#d4af37] hover:text-[#d4af37] transition-all rounded bg-slate-800/50"
                                                    >
                                                        <Download className="w-5 h-5" />
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
