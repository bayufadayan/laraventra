'use client';
import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Dropzone,
    DropzoneContent,
    DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone"
import { useState } from 'react';
import { cn } from "@/lib/utils"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Gallery',
        href: '/gallery',
    },
    {
        title: 'Create new item',
        href: '/gallery/create',
    },
];


export default function GalleryPage() {
    const [files, setFiles] = useState<File[] | undefined>();
    const [filePreview, setFilePreview] = useState<string | undefined>();
    const handleDrop = (files: File[]) => {
        console.log(files);
        setFiles(files);
        if (files.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (typeof e.target?.result === 'string') {
                    setFilePreview(e.target?.result);
                }
            };
            reader.readAsDataURL(files[0]);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Gallery" />
            <div className="relative flex flex-col h-full flex-1 gap-4 overflow-x-auto rounded-xl p-4 text-neutral-900">
                <div className='flex flex-col gap-0 w-full'>
                    <h1 className='text-2xl font-bold'>Please add your absurd item</h1>
                    <p>Absurd item it's can be anything. Then, we will evaluate and give you an absurdity score to boost ypur absurd things</p>
                </div>
                <form action="">
                    <div className="relative grid grid-cols-1 lg:grid-cols-2 h-full flex-1 gap-4 overflow-x-auto rounded-xl p-4 text-neutral-900">

                        <div className='border border-white/20 rounded-xl flex flex-col gap-4 bg-white'>
                            <Dropzone
                                accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }}
                                onDrop={handleDrop}
                                onError={console.error}
                                src={files}
                                className='bg-blue-500 h-full w-full'
                            >
                                <DropzoneEmptyState />
                                <DropzoneContent>
                                    {filePreview && (
                                        <div className="h-[102px] w-full">
                                            <img
                                                alt="Preview"
                                                className="absolute top-0 left-0 h-full w-full object-cover"
                                                src={filePreview}
                                            />
                                        </div>
                                    )}
                                </DropzoneContent>
                            </Dropzone>
                        </div>

                        <div className='bg-white/10 border border-white/20 rounded-xl p-6 flex flex-col gap-4'>
                            <div className="grid gap-3">
                                <div className="grid gap-2 text-[#005B46]">
                                    <Label htmlFor="title">
                                        Title
                                    </Label>
                                    <Input
                                        id="title"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="title"
                                        name="title"
                                        placeholder="Title of your item"
                                        className={cn("border border-[#005B46] py-5 rounded-lg placeholder:text-[#005B46]/70 focus-visible:outline-none selection:bg-[#00f8be] selection:text-[#005B46]",
                                            'focus-visible:ring-[#00f8be] focus-visible:ring-opacity-10 focus-visible:border-[#00f8be]'
                                        )}
                                    />
                                </div>

                                <div className="grid gap-2 text-[#005B46]">
                                    <Label htmlFor="description">Describe</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        rows={5}
                                        autoComplete="description"
                                        placeholder="Describe absurdly"
                                        className={cn(
                                            "border border-[#005B46] rounded-lg placeholder:text-[#005B46]/70 focus-visible:outline-none selection:bg-[#00f8be] selection:text-[#005B46]",
                                            "focus-visible:ring-[#00f8be] focus-visible:ring-opacity-10 focus-visible:border-[#00f8be]",
                                            "custom-scroll"
                                        )}
                                    />
                                </div>

                                <Button type="submit" className="mt-4 w-full bg-[#005B46] text-white py-5 hover:bg-amber-500 cursor-pointer" tabIndex={5}>
                                    {/* {processing && <LoaderCircle className="h-4 w-4 animate-spin" />} */}
                                    Create New Item
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    )
}
