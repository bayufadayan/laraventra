import React from 'react';
import { useState } from "react";
// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
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

export default function GalleryPage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [columns, setColumns] = useState([
        [
            {
                src: "https://picsum.photos/600/800",
                title: "Foto Gunung",
                description: "Pemandangan indah di atas awan",
            },
            {
                src: "https://picsum.photos/400/1200",
                title: "Hutan Rimba",
                description: "Pepohonan lebat yang misterius",
            },
            {
                src: "https://picsum.photos/900/700",
                title: "Pantai Senja",
                description: "Langit jingga di tepi laut",
            },
        ],
        [
            {
                src: "https://picsum.photos/800/600",
                title: "Danau Tenang",
                description: "Air jernih memantulkan langit",
            },
            {
                src: "https://picsum.photos/500/900",
                title: "Air Terjun",
                description: "Derasnya aliran dari ketinggian",
            },
            {
                src: "https://picsum.photos/700/1300",
                title: "Kota Malam",
                description: "Lampu berkelip di tengah kota",
            },
        ],
        [
            {
                src: "https://picsum.photos/1920/1080",
                title: "Pegunungan",
                description: "Barisan gunung menjulang tinggi",
            },
            {
                src: "https://picsum.photos/500/500",
                title: "Bunga Mekar",
                description: "Warna-warni yang menyejukkan hati",
            },
            {
                src: "https://picsum.photos/1080/1920",
                title: "Jalan Sepi",
                description: "Jalur panjang menuju horizon",
            },
        ],
    ]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery" />
            <div className="relative flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4 text-neutral-900 custom-scroll">
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
                <div className="relative h-full grid grid-cols-3 gap-4 overflow-x-auto overflow-y-clip rounded-xl p-4">
                    {columns.map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-4 w-full">
                            {col.map((item, imgIdx) => (
                                <figure
                                    key={imgIdx}
                                    className="relative group w-full overflow-hidden rounded-xl"
                                >
                                    <LazyLoadImage
                                        src={item.src}
                                        alt={item.title}
                                        // effect="blur"
                                        className="w-full h-auto object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <figcaption className="absolute top-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.title}
                                    </figcaption>

                                    <p className="absolute bottom-2 left-2 right-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.description}
                                    </p>
                                </figure>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </AppLayout>
    )
}
