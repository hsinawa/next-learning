import React from 'react';
import { cn } from '@/lib/utils'; // Utility function for conditional classNames
import { IconType } from 'react-icons';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { TbBrandLeetcode } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/awanish-mishra-5b5b4a1b1/',
    label: 'LinkedIn',
    Icon: AiFillLinkedin,
  },

  {
    href: 'https://github.com/hsinawa',
    label: 'GitHub',
    Icon: AiFillGithub,
  },
  {
    href: 'https://leetcode.com/u/awanishmishra003/',
    label: 'Leetcode',
    Icon:TbBrandLeetcode ,
  },
  {
    href: 'tel:+919599150262',
    label: 'Call',
    Icon: IoIosCall,
  },
  {
    href: 'mailto:awanishmishraenterprise@gmail.com',
    label: 'Email',
    Icon: AiOutlineMail,
  },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 w-full">
      <div className="container mx-auto">
       
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
       
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">Handcrafted@me</h1>
          </div>
         
          <nav className="flex space-x-6 text-sm ">
          <Link href="about" className="hover:underline hover:text-gray-400">
              About
            </Link>

            <Link href="projects" className="hover:underline hover:text-gray-400">
              Projects
            </Link>
           
            <Link href="contact" className="hover:underline hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </div>
       
        <Separator className="my-6 text-white" />
      
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ href, label, Icon }) => (
            <Tooltip key={href}>
              <TooltipTrigger asChild>
                <Link
              
                  href={href||''}
                  target="_blank"
                  rel="noreferrer"

                  className="text-white hover:text-gray-400"
                >
                  <Icon size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
  
        <div className="mt-8 text-center text-xs md:text-sm pb-20 md:pb-0">
          <p>© {new Date().getFullYear()} Awanish Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
