import AuthSplitLayout from './auth/auth-split-layout';

export default function AuthLayout({ children, title, description, authType, ...props }: { children: React.ReactNode; title: string; description: string; authType: string }) {
    return (
        <AuthSplitLayout title={title} description={description} authType={authType} {...props}>
            {children}
        </AuthSplitLayout>
    );
}
