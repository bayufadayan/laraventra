import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { MdAccountCircle } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { cn } from "@/lib/utils"

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in" authType='Login'>
            <Head title="Log in" />

            <Form {...AuthenticatedSessionController.store.form()} resetOnSuccess={['password']} className="flex flex-col gap-6">
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-3">
                            <div className="grid gap-1 text-[#005B46]">
                                <div className="relative">
                                    <div className='absolute text-[#005B46] left-2 flex h-full items-center'>
                                        <MdAccountCircle className='size-7' />
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
                                        autoFocus
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

                            <div className="flex items-center space-x-2 text-[#005B46]">
                                <Checkbox id="remember" name="remember" tabIndex={3} className='border-[#005B46]' />
                                <Label htmlFor="remember" className='text-[#005B46]'>Remember me</Label>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <Button type="submit" className="mt-4 w-full bg-[#005B46] text-white py-5 hover:bg-amber-500 cursor-pointer" tabIndex={4} disabled={processing}>
                                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Log in
                                </Button>
                                <div className="flex flex-row text-sm justify-center gap-1 text-[#005B46]">
                                    <p>Forgot password?</p>
                                    {canResetPassword && (
                                        <TextLink href={request()} className="text-[#005B46]" tabIndex={5}>
                                            Reset Now
                                        </TextLink>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}
