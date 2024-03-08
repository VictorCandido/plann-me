import { MenuItemProps } from "@/types/menu-item-props";
import Link from "next/link";

interface SidebarMenuItemProps {
    menu: MenuItemProps
}

const SidebarMenuItem = ({ menu }: SidebarMenuItemProps) => {
    return (
        <Link
            className="flex items-center py-2 px-1 rounded-md text-zinc-600 transition-all hover:text-zinc-950 hover:bg-zinc-100"
            href={menu.link}
        >
            <menu.icon className="h-6 w-6 mr-3" />
            {menu.name}
        </Link>
    );
}

export default SidebarMenuItem;