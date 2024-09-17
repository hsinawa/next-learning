import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"


interface WorkExComponentProps {
  id?: number;
  role?: string;
  company?: string;
  duration?: string;
  description?: string[];
  technologies?: string[];
  image?: string;
}

const WorkExComponent = ({
  id,
  role,
  company,
  duration,
  description,
  technologies,
  image,
}: WorkExComponentProps) => {
  return (
    <main>
      <section className="block md:grid md:grid-cols-2 mt-5">
        <div className="flex flex-col justify-center items-center mt-[15%] md:mt-[5%]">
          {image && (
            <Image
              src={image}
              alt={company || "Company image"}
              height={200}
              width={200}
              className="rounded-full"
            />
          )}
          <h3 className="text-1xl font-bold text-gray-700 mt-4">{duration}</h3>
        </div>

        <div className="flex justify-center items-center mt-[10%] sm:justify-start">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mt-[-5%]">
              {role}
            </h3>
            <ul className="text-gray-600 text-lg mt-2 text-justify" id="about-paragraph">
              {description?.map((desc, index) => (
                <li key={index} className="text-gray-600 text-sm mt-2 text-justify">
               -  {desc}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap mt-4">
              {technologies?.map((tech, index) => (
                <Button key={index} variant="secondary" className="mr-2 mb-2 hover:bg-gray-300">
                  {tech}
                </Button>
              ))}
              </div>
          </div>
        
        </div>
        
      </section>
    </main>
  );
};

export default WorkExComponent;
