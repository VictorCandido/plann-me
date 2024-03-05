import { menuItems } from "@/utils/menu-items";
import SidebarMenuItem from "./sidebar-menu-item";

const SidebarMenu = () => {
    return (
        <nav className="flex-1 overflow-auto px-4 py-4">
            <div className="grid gap-4">
                {menuItems.map((item, index) => <SidebarMenuItem menu={item} key={index} />)}
            </div>
        </nav>
    );
}

export default SidebarMenu;