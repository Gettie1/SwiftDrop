import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function Sidebar() {
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

  return (
    <aside className="w-64 h-full p-4 bg-gray-800 text-white">
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mb-4">
                <Menu size={16}/>
            </button>
        </div>
        {/* <nav className={`mt-4 ${isOpen ? 'block' : 'hidden'} md:block`}> */}
    </aside>
  );
}