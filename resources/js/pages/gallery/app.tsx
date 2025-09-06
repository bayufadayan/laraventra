import React from 'react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Head } from '@inertiajs/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Settings, ImagePlus, Star, Trophy } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gallery',
        href: '/gallery',
    },
];

export default function app() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery" />
            <div className="relative flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 text-neutral-900">
                <div className='flex items-center gap-2 justify-between'>
                    <div className='flex items-center gap-4 max-w-1/2 overflow-hidden h-full'>
                        <figure className='w-36 h-full aspect-square overflow-hidden rounded-full'>
                            <LazyLoadImage
                                alt="Banner Starter 1"
                                src="/images/banner-starter-1.svg"
                                className="h-full w-full object-cover object-bottom transition-transform duration-500"
                                draggable={false}
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </figure>
                        <div className='flex flex-col gap-0'>
                            <span className='flex gap-2 items-center'>
                                <h1 className='text-2xl font-bold'>Muhamad Bayu Fadayan</h1>
                                <Link href={route('profile.edit')}>
                                    <Settings className='size-5 text-black/60' />
                                </Link>
                            </span>
                            <div className="flex flex-col gap-1">
                                <div className='flex gap-1 text-neutral-500 text-sm'>
                                    <p>bayufadayan@gmail.com</p>
                                </div>
                                <div className='flex gap-4 text-neutral-500 text-sm'>
                                    <p>0 items</p>
                                    <p className='flex gap-1 items-center'><Star className='size-4' /> 1242 points</p>
                                    <p className='flex gap-1 items-center'><Trophy className='size-4' />4th Ranked</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <Link href={route('gallery.create')} as="button">
                            <Button type="submit" className="bg-[#005B46] mt-4 w-full border border-[#005B46] text-white cursor-pointer hover:bg-[#005B46] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-700" tabIndex={4}>
                                <ImagePlus />Add new item
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className='relative flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl border-2 border-dashed'>
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-green-800/20" />
                </div>
            </div>
        </AppLayout>
    )
}
