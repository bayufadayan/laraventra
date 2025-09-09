import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Leaderboard',
        href: '/leaderboard',
    },
];

export default function Leaderboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="relative flex h-full flex-1 flex-col items-center justify-center overflow-hidden rounded-xl p-4 bg-gradient-to-br from-green-100 via-white to-green-50">
                {/* Background pattern */}
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10" />

                {/* Overlay transparan */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80" />

                {/* Text Coming Soon */}
                <div className="relative z-30 text-center space-y-2">
                    <h1 className="text-5xl font-extrabold text-[#086434] drop-shadow-md animate-pulse">
                        🚧 Coming Soon
                    </h1>
                    <p className="text-lg text-neutral-700">
                        Fitur ini lagi dikembangin, stay tuned ya!
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
