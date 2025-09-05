import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { register, login } from '@/routes';

interface AuthLayoutProps {
    title?: string;
    description?: string;
    authType?: string;
}

export default function AuthSplitLayout({ children, title, description, authType }: PropsWithChildren<AuthLayoutProps>) {
    const { name, quote } = usePage<SharedData>().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
                <div className="absolute inset-0 bg-zinc-900">
                    <figure className="relative h-full w-full overflow-hidden">
                        <LazyLoadImage
                            alt="Banner Starter 1"
                            src="/images/banner-starter-1.svg"
                            className="h-full w-full object-cover object-bottom transition-transform duration-500"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </figure>
                </div>
                <Link href={home()} className="relative z-20 flex items-center text-lg font-medium flex-col text-[#F2FF8F]">
                    <AppLogoIcon className="mr-2 size-8 fill-current text-white" />
                    {name}
                </Link>
                <p className='relative z-20 text-center text-base mt-8 text-[#00FF80] px-24'>
                    Laraventra adalah museum virtual interaktif yang menampilkan koleksi barang absurd dalam galeri digital penuh warna dan imajinasi.
                </p>
                {quote && (
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-1 text-[#b1ffd1]">
                            <p className="text-lg">&ldquo;{quote.message}&rdquo;</p>
                            <footer className="text-sm">— {quote.author}</footer>
                        </blockquote>
                    </div>
                )}
            </div>
            <div className="relative w-full flex flex-col justify-between items-center h-full py-4">
                <div className="absolute inset-0">
                    <figure className="relative h-full w-full overflow-hidden">
                        <LazyLoadImage
                            alt="Banner Starter 2"
                            src="/images/banner-starter-2.svg"
                            className="h-full w-full object-cover object-bottom transition-transform duration-500"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </figure>
                </div>
                <div className="absolute inset-0">
                    <figure className="relative h-full w-full overflow-hidden">
                        <LazyLoadImage
                            alt="Banner Starter 3"
                            src="/images/banner-starter-3.svg"
                            className="h-full w-full mix-blend-lighten object-cover object-bottom transition-transform duration-500"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </figure>
                </div>
                {authType && (
                    <Link href={authType === 'Login' ? register() : login()} className='bg-[#00f8be]/10 text-[#005B46] border border-[#005B46] px-6 py-2 self-end mx-8 translate-y-4 z-20'>
                        {authType === 'Login' ? 'Register' : 'Login'}
                    </Link>
                )}
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] z-20">
                    <Link href={home()} className="relative z-20 flex items-center justify-center lg:hidden">
                        <AppLogoIcon className="h-10 fill-current text-black sm:h-12" />
                    </Link>
                    <div className="flex flex-col items-start gap-2 text-left sm:items-center sm:text-center text-[#005B46]">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="text-sm text-balance">{description}</p>
                    </div>
                    {children}
                </div>
                <p className='text-center text-sm w-[350px] text-[#005B46] z-20'>By clicking continue, you agree to our <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy</span>.</p>
            </div>
        </div>
    );
}
