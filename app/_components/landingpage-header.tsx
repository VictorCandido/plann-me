import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingpageHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between h-20 px-4 md:px-6 z-10">
            <div className="flex items-center">
                <Link href="/">
                    {/* <Image alt="Logo" src="/placeholder.svg" width={32} height={32} /> */}

                    <div className="h-8 w-8 bg-gray-300 rounded-md" />
                </Link>

                <nav className="flex items-center space-x-6 ml-8">
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/quem-somos">
                        Quem somos
                    </Link>

                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/recursos">
                        Recursos
                    </Link>

                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/precos">
                        Preços
                    </Link>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <Button className="hidden md:flex" variant="outline">
                    Login
                </Button>
                <Button className="hidden md:flex">Comece já</Button>
            </div>
        </header>
    );
}

export default LandingpageHeader;