export default function AppLogoIcon(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} className="h-10 w-fit">
            <img
                src="/images/logo-laraventra.svg"
                alt="Logo"
                className="h-full w-full object-contain"
            />
        </div>
    );
}
