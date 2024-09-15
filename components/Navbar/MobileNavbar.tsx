
import Image from 'next/image';
import { NavbarLinks } from "@/constants";
import '../../styles/Navbar.css'
import { usePathname } from 'next/navigation';

const MobileNavBar = () => {

    const pathname = usePathname();
    return (
      <main className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-4 px-6" id="navbar-mobile" >
        <div className="text-center">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
  
        <div className="flex flex-row items-center justify-center gap-[2.5rem] mt-1 sm:justify-end sm:mt-0 mx-auto">
          {NavbarLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <div key={link.id} className="flex flex-col items-center gap-1">
                <Image
                  src={link.imagePath}
                  alt={link.name}
                  width={20}
                  height={20}
                  className={`transition-opacity duration-300 ${isActive ? 'opacity-60' : 'opacity-100'}`}
                />
                <a
                  className={`font-medium ${isActive ? 'text-gray-400' : 'text-gray-800'} hover:text-gray-400 focus:outline-none focus:text-gray-400`}
                  href={link.href}
                >
                  {link.name}
                </a>
              </div>
            );
          })}
        </div>
      </nav>
        </div>
      </main>
    );
  };
  
  export default MobileNavBar;
  
