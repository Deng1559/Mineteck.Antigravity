import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './use-auth';

export function useRequireAuth(allowedRoles?: Array<'admin' | 'investor' | 'auditor'>) {
    const { user, loading, userProfile } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading) {
            if (!user) {
                router.push('/login');
            } else if (allowedRoles && userProfile && !allowedRoles.includes(userProfile.role)) {
                router.push('/dashboard'); // or a 403 page
            }
        }
    }, [user, loading, userProfile, router, allowedRoles]);

    return { user, loading, userProfile };
}
