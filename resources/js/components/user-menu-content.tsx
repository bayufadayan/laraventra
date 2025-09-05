import { DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { UserInfo } from '@/components/user-info';
import { useMobileNavigation } from '@/hooks/use-mobile-navigation';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import { type User } from '@/types';
import { Link, router } from '@inertiajs/react';
import { LogOut, Settings } from 'lucide-react';

interface UserMenuContentProps {
    user: User;
}

export function UserMenuContent({ user }: UserMenuContentProps) {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };

    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true} />
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuGroup className='group'>
                <DropdownMenuItem asChild className='group-hover:bg-[#08532e] group-hover:text-[#F2FF8F] cursor-pointer'>
                    <Link className="block w-full" href={edit()} as="button" prefetch onClick={cleanup}>
                        <Settings className="mr-2 group-hover:text-[#F2FF8F]" />
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />
            
            <DropdownMenuItem asChild className='hover:bg-[#08532e] hover:text-[#F2FF8F] group cursor-pointer'>
                <Link className="block w-full" href={logout()} as="button" onClick={handleLogout}>
                    <LogOut className="mr-2 group-hover:text-[#F2FF8F]" />
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    );
}
