'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BellRing, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";

const UserMenu = () => {
    return (
        <div className="flex items-center space-x-4">
            <BellRing className="h-6 w-6 text-gray-600" />

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="h-10" size="sm" variant="ghost">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-60">
                    <div className="p-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-semibold">Jhon Doe</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">jhon.doe@email.com</p>
                            </div>
                        </div>
                    </div>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <UserIcon className="w-4 h-4 mr-2" />
                        Profile
                    </DropdownMenuItem>

                    <DropdownMenuSeparator />

                    <DropdownMenuItem>
                        <SettingsIcon className="w-4 h-4 mr-2" />
                        Settings
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => { }}>
                        <div className="flex items-center gap-2">
                            <LogOutIcon className="w-5 h-5" />
                            Logout
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default UserMenu;