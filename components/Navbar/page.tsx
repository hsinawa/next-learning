'use client';
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileNavBar from "./MobileNavbar";

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null); 

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 668);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isDesktop === null) {
  
    //return window.innerWidth > 668? <DesktopHeader /> : <MobileNavBar />;
    return null;
  }

  return (
    <header>
      {isDesktop ? (
        <DesktopHeader />
      ) : (
        <MobileNavBar />
      )}
    </header>
  );
};

export default Navbar;
