'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { uploadFile } from '@/lib/storage-utils';
import { Upload, FileText, CheckCircle2, AlertCircle, Loader2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminUpload() {
    const { user, userProfile } = useAuth();
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState<'GEOLOGICAL' | 'FINANCIAL' | 'LEGAL' | 'GENERAL'>('GENERAL');
    const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus({ type: 'idle', message: '' });
        }
    };

    const handleUpload = async () => {
        if (!file || !user) return;

        setUploading(true);
        setStatus({ type: 'idle', message: '' });

        try {
            await uploadFile(
                file,
                user.uid,
                user.email || 'unknown',
                category,
                description,
                (p: number) => setProgress(p)
            );

            setStatus({ type: 'success', message: `SECURE UPLOAD COMPLETE: ${file.name}` });
            setFile(null);
            setDescription('');
            setProgress(0);
        } catch (error) {
            setStatus({ type: 'error', message: 'UPLOAD INTERRUPTED BY SERVER' });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="bg-[#1a1a1a] border border-[#333] p-6 rounded-lg shadow-2xl relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center justify-between mb-6 border-b border-[#333] pb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#d4af37]/10 rounded border border-[#d4af37]/20">
                        <Upload className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold tracking-widest text-white uppercase">Secure Vault Entry</h2>
                        <p className="text-[10px] text-[#888] font-mono">PROTOCOL: STORAGE_UPLOAD_V1</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                {/* File Drop Area */}
                <div className={`relative border-2 border-dashed transition-all duration-300 ${file ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-[#333] hover:border-[#444]'} p-8 rounded-lg text-center backdrop-blur-sm`}>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        accept=".pdf,.xlsx,.csv"
                    />
                    {!file ? (
                        <div className="space-y-3">
                            <FileText className="w-10 h-10 text-[#555] mx-auto" />
                            <div>
                                <p className="text-sm text-[#eee] font-medium">Select Secure Document</p>
                                <p className="text-xs text-[#666] mt-1 font-mono">SUPPORTED: PDF, XLSX, CSV</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-left">
                                <div className="p-2 bg-black/50 border border-[#d4af37]/30 rounded">
                                    <FileText className="w-6 h-6 text-[#d4af37]" />
                                </div>
                                <div>
                                    <p className="text-sm text-white font-medium truncate max-w-[200px]">{file.name}</p>
                                    <p className="text-xs text-[#888] font-mono">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                            </div>
                            <button onClick={() => setFile(null)} className="p-2 hover:bg-black/50 text-[#888] hover:text-white transition-colors z-20">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[10px] text-[#d4af37] uppercase tracking-widest mb-2 font-mono">Classification</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as any)}
                            className="w-full bg-black/50 border border-[#333] p-3 text-white text-xs outline-none focus:border-[#d4af37] transition-colors appearance-none"
                        >
                            <option value="GEOLOGICAL">GEOLOGICAL DATA</option>
                            <option value="FINANCIAL">FINANCIAL REPORT</option>
                            <option value="LEGAL">LEGAL DOCUMENT</option>
                            <option value="GENERAL">GENERAL ACCESS</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-[10px] text-[#d4af37] uppercase tracking-widest mb-2 font-mono">Description / Metadata</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="ENTER FILE CONTEXT..."
                        className="w-full bg-black/50 border border-[#333] p-3 text-white text-xs h-20 outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                </div>

                {uploading && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono">
                            <span className="text-[#888] uppercase">Encryption & Transfer Progress</span>
                            <span className="text-[#d4af37]">{Math.round(progress)}%</span>
                        </div>
                        <div className="h-1 bg-black rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-[#d4af37]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                    </div>
                )}

                <AnimatePresence>
                    {status.type !== 'idle' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`p-3 rounded border text-xs flex items-center gap-2 ${status.type === 'success'
                                ? 'bg-emerald-900/10 border-emerald-900/50 text-emerald-400'
                                : 'bg-red-900/10 border-red-900/50 text-red-400'
                                }`}
                        >
                            {status.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                            <span className="font-mono tracking-tighter">{status.message}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={handleUpload}
                    disabled={!file || uploading}
                    className="w-full py-4 bg-[#d4af37] hover:bg-[#b8952d] disabled:bg-[#333] disabled:text-[#666] text-black font-bold text-xs uppercase tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2"
                >
                    {uploading ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            SECURING...
                        </>
                    ) : (
                        <>
                            <Upload className="w-4 h-4" />
                            EXECUTE UPLOAD
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
