interface DashboardLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: DashboardLayoutProps) => {
    return <div>{children}</div>;
};

export default RootLayout;
