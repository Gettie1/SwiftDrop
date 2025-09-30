import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AuthStore } from "@/store/authStore";
import { checkRole } from "@/lib/roles";
// import { Navbar } from "./NavBar";


export function Sidebar() {
    const activeRoute = useRouterState({select : (state) => state.location.pathname});
    const {user} = AuthStore.state;
    const userRole = user.role;
    const navs = checkRole(userRole);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isActive = (path: string) => `flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors ${activeRoute === path ? 'bg-gray-700' : ''}`;

  return (
    <>
    {/* <Navbar/> */}
    <aside className="inset-y-0 left-0 w-64 h-full p-4 bg-blue-800 text-white z-40 flex flex-col">
        <div className="relative z-50">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden mb-4"
            aria-label="Toggle sidebar"
            >
            <Menu size={20} />
            </button>
        </div>
        {/* sidebar content */}
        <nav className={`mt-4 flex-1 overflow-y-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="space-y-2">
                {navs.map((nav) => (
                    <div key={nav.label}>
                        <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {nav.label}
                        </h3>
                        {/* Assuming nav.links is an array of link objects */}
                        {nav.links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors ${isActive(link.to)}`}
                                onClick={() => setIsOpen(false)} // Close sidebar on link click (for mobile)
                                >
                                <link.icon className="mr-2" size={16} />
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                ))}
            </ul>
        </nav>
    </aside>
    </>
  );
}