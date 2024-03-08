import { ReactNode } from "react";
import LogoButton from "./logo-button";
import SidebarMenu from "./sidebar-menu";

interface SidebarProps {
    children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    return (
        <div className="flex h-full w-full bg-[#f7f8fa]">
            <div className="hidden border-r border-gray-200 bg-white w-[250px] md:block fixed">
                <div className="flex h-screen flex-col">
                    <LogoButton />
                    <SidebarMenu />
                </div>
            </div>

            <div className="w-full ml-[250px]">
                {children}
            </div>
        </div>
    );
}

export default Sidebar;