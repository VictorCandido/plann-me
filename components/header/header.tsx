import { ReactNode } from "react";
import SearchInput from "./search-input";
import UserMenu from "./user-menu";
import { CommandMenu } from "./command-menu";

interface HeaderProps {
    children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
    return (
        <>
            <nav className="bg-white h-16 w-[calc(100%-250px)] px-8 flex justify-between items-center shadow fixed">
                {/* <SearchInput /> */}

                <CommandMenu />

                {/* <div className="flex space-x-6">
                    <Button variant="ghost">visão geral</Button>
                    <Button variant="ghost">lançamentos</Button>
                    <Button variant="ghost">relatórios</Button>
                    <Button variant="ghost">limite de gastos</Button>
                </div> */}

                <UserMenu />
            </nav>

            <div className="mt-24">
                {children}
            </div>
        </>
    );
}

export default Header;