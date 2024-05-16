"use client"

import { usePathname } from "next/navigation";


interface MainNavProps {
    data: any
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname()
    return (
        <nav>
            main-nav
        </nav>
    );
}

export default MainNav;