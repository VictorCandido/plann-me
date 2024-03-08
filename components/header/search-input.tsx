import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
    return (
        <div className="w-full flex-1">
            {/* <form>
                <div className="relative">
                    <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <Input
                        className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                        placeholder="Search..."
                        type="search"
                    />
                </div>
            </form> */}


            <div className="relative">
                <Button
                    variant="outline"
                    className="w-full flex justify-between text-zinc-400 items-center pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                >
                    <div className={`flex gap-2`}>
                        <Search size={18} />
                        <span>Procurar...</span>
                    </div>
                    <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </Button>
            </div>
        </div>
    );
}

export default SearchInput;