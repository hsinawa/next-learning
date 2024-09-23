import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import HomeScreen from "@/components/Homescreen/HomeScreen";
import Marquee from "react-fast-marquee";
import MarqueeComponent from "@/components/Marquee/Marquee";
import AboutPage from "./about/page";
import ProjectPage from "./projects/page";


export default function Home() {
  return (
   <main>
    <HomeScreen />
    <MarqueeComponent />
    <AboutPage />
    <ProjectPage />
    <br /><br /><br />
   </main>
  );
}
