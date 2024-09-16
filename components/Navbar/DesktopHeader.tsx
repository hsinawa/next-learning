import React from "react";
import { NavbarLinks } from "@/constants";
import '../../styles/Navbar.css';
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Link from "next/link"; // Import Link from next/link

const DesktopHeader = () => {
  const pathname = usePathname();
   
  return (
    <div id="navbar-desktop">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <Link href="/" passHref legacyBehavior>
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              aria-label="Brand"
            >
              <Image
                src='/icons/amlogo2.png'
                alt='Awanish Mishra Logo'
                width={30}
                height={30}
              />
            </a>
          </Link>
          <div className="flex flex-row items-center gap-[3.5rem] mt-1 sm:justify-end sm:mt-0 sm:ps-5">
            {NavbarLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <div key={link.id} className="flex items-center gap-2">
                  <Image
                    src={link.imagePath}
                    alt={link.name}
                    width={20}
                    height={20}
                    className={`transition-opacity duration-300 ${isActive ? 'opacity-60' : 'opacity-100'}`}
                  />
                  <Link href={link.href} passHref legacyBehavior>
                    <a
                      className={`font-medium ${isActive ? 'text-gray-500' : 'text-gray-800'} hover:text-gray-400 focus:outline-none focus:text-gray-400`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default DesktopHeader;
