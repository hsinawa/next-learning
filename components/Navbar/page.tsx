'use client';
import { useState, useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileNavBar from "./MobileNavbar";

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);

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
