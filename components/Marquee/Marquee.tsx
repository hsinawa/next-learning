import { SkillsList } from "@/constants";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  return (
    <main id="width-and-center-body">
      <Marquee pauseOnHover={true} >
        {SkillsList.map((skill) => (
          <div key={skill?.id} className="flex items-center mr-4 p-10 cursor-pointer">
            <Image src={skill?.image || 'imageURL'}  alt={skill?.name || '' } width={40} height={40} />
            <p className="text-gray-600 ml-2">{skill?.name}</p>
          </div>
        ))}
      </Marquee>
    </main>
  );
};

export default MarqueeComponent;
