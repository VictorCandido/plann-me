import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";

const AppLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Sidebar>
            <Header>
                {children}
            </Header>
        </Sidebar>
    );
}

export default AppLayout;