import { MenuItemProps } from "@/types/menu-item-props";
import { BarChart2Icon, CreditCardIcon, Layout, RepeatIcon, SettingsIcon } from "lucide-react";

export const menuItems: Array<MenuItemProps> = [
    { name: 'Home', link: '/app/home', icon: Layout },
    { name: 'Contas', link: '/app/contas', icon: CreditCardIcon },
    { name: 'Transações', link: '/app/transacoes', icon: RepeatIcon },
    { name: 'Relatórios', link: '/app/relatorios', icon: BarChart2Icon },
    { name: 'Configurações', link: '/app/configuracoes', icon: SettingsIcon },
];