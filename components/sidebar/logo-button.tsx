import { ActivityIcon } from "lucide-react";
import Link from "next/link";

const LogoButton = () => {
    return (
        <div className="flex h-16 items-center border-b px-4 justify-center">
            <Link className="flex items-center gap-2 font-semibold" href="#">
                <ActivityIcon className="h-6 w-6" />
                <span className="">Plann.me</span>
            </Link>
        </div>
    );
}

export default LogoButton;