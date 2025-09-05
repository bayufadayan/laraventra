import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="relative flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-green-800/20" />
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl z-30 text-[#086434] font-bold'>Content Gallery Here</p>
            </div>
        </AppLayout>
    );
}
