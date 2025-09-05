import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuthLayout from '@/layouts/auth-layout';

import { MdAccountCircle } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { cn } from "@/lib/utils"

export default function Register() {
    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account" authType='Register'>
            <Head title="Register" />
            <Form
                {...RegisteredUserController.store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-3">
                            <div className="grid gap-1 text-[#005B46]">
                                <div className="relative">
                                    <div className='absolute text-[#005B46] left-2 flex h-full items-center'>
                                        <MdAccountCircle className='size-7' />
                                    </div>
                                    {errors.name &&
                                        <div className='absolute text-red-500 right-3 flex h-full items-center'>
                                            <IoCloseCircle className='size-6' />
                                        </div>
                                    }
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="name"
                                        name="name"
                                        placeholder="Full name"
                                        className={cn("border border-[#005B46] pl-11 pr-10 py-5 rounded-full placeholder:text-[#005B46]/70 focus-visible:outline-none selection:bg-[#00f8be] selection:text-[#005B46]",
                                            errors.name ? 'border-red-400 focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-opacity-50 focus-visible:border-red-400' : 'focus-visible:ring-[#00f8be] focus-visible:ring-opacity-10 focus-visible:border-[#00f8be]'
                                        )}
                                    />
                                </div>
                                <InputError message={errors.name} className='text-xs font-medium' />
                            </div>

                            <div className="grid gap-1 text-[#005B46]">
                                <div className="relative">
                                    <div className='absolute text-[#005B46] left-2.5 flex h-full items-center'>
                                        <MdAlternateEmail className='size-6' />
                                    </div>
                                    {errors.email &&
                                        <div className='absolute text-red-500 right-3 flex h-full items-center'>
                                            <IoCloseCircle className='size-6' />
                                        </div>
                                    }
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        tabIndex={1}
                                        autoComplete="email"
                                        placeholder="email@example.com"
                                        className={cn("border border-[#005B46] pl-11 pr-10 py-5 rounded-full placeholder:text-[#005B46]/70 focus-visible:outline-none selection:bg-[#00f8be] selection:text-[#005B46]",
                                            errors.email ? 'border-red-400 focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-opacity-50 focus-visible:border-red-400' : 'focus-visible:ring-[#00f8be] focus-visible:ring-opacity-10 focus-visible:border-[#00f8be]'
                                        )}
                                    />
                                </div>
                                <InputError message={errors.email} className='text-xs font-medium' />
                            </div>

                            <div className="grid gap-1 text-[#005B46]">
                                <div className="relative">
                                    <div className='absolute text-[#005B46] left-2.5 flex h-full items-center'>
                                        <GiPadlock className='size-7' />
                                    </div>
                                    {errors.password &&
                                        <div className='absolute text-red-500 right-3 flex h-full items-center'>
                                            <IoCloseCircle className='size-6' />
                                        </div>
                                    }
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        required
                                        tabIndex={2}
                                        autoComplete="current-password"
                                        placeholder="password"
                                        className={cn("border border-[#005B46] pl-11 pr-10 py-5 rounded-full placeholder:text-[#005B46]/70 focus-visible:outline-none selection:bg-[#00f8be] selection:text-[#005B46]",
                                            errors.password ? 'border-red-400 focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-opacity-50 focus-visible:border-red-400' : 'focus-visible:ring-[#00f8be] focus-visible:ring-opacity-10 focus-visible:border-[#00f8be]'
                                        )}
                                    />
                                </div>
                                <InputError message={errors.password} className='text-xs font-medium' />
                            </div>

                            <div className="grid gap-1 text-[#005B46]">
                                <div className="relative">
                                    <div className='absolute text-[#005B46] left-2.5 flex h-full items-center'>
                                        <GiPadlock className='size-7' />
                                    </div>
                                    {errors.password_confirmation &&
                                        <div className='absolute text-red-500 right-3 flex h-full items-center'>
                                            <IoCloseCircle className='size-6' />
                                        </div>
                                    }
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                        className={cn("border border-[#005B46] pl-11 pr-10 py-5 rounded-full placeholder:text-[#005B46]/70 focus-visible:outline-none selection:bg-[#00f8be] selection:text-[#005B46]",
                                            errors.password_confirmation ? 'border-red-400 focus-visible:ring-2 focus-visible:ring-red-200 focus-visible:ring-opacity-50 focus-visible:border-red-400' : 'focus-visible:ring-[#00f8be] focus-visible:ring-opacity-10 focus-visible:border-[#00f8be]'
                                        )}
                                    />
                                </div>
                                <InputError message={errors.password_confirmation} className='text-xs font-medium' />
                            </div>

                            <Button type="submit" className="mt-4 w-full bg-[#005B46] text-white py-5 hover:bg-amber-500 cursor-pointer" tabIndex={5}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Create account
                            </Button>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
