import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchInput = () => {
    return (
        <div className="w-full flex-1">
            <form>
                <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                        className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                        placeholder="Search..."
                        type="search"
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchInput;