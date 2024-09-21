'use client'
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

interface Project {
  index: number;
  name: string;
  image: string;
  description?: string;
  technologies?: string[];
  imagesArray?: string[];
  features?: string[];
  isLive?: boolean;
  link?: string;
 
}

const ProjectCard = ({ index, image, name, description }: Project) => {
  return (
    <main>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col sm:flex-row cursor-pointer hover:shadow-lg transition-shadow duration-300 group">
        <div className="flex justify-center sm:ml-[10%] w-full sm:w-auto">
          <Image
            src={image}
            alt={name}
            width={130}
            height={100}
            className="object-fit mb-0 sm:mb-0"
          />
        </div>

        <div className="ml-0 sm:ml-[15%] space-y-2 text-center sm:text-left w-full sm:w-auto mt-7 md:mt-0">
          <h1 className="text-md sm:text-lg font-bold text-gray-800 text-center md:text-justify">
            {name}
          </h1>
          <p className="text-sm sm:text-md text-gray-600 leading-relaxed text-justify">
            {description}
          </p>
          <p className="relative cursor-pointer text-gray-500 sm:text-gray-400 text-center md:text-justify font-semibold transition-all duration-300 group-hover:text-gray-800">
            View
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};



const ProjectBody = ({
    name,
    description,
    imagesArray,
    features,
    technologies,
    isLive,
    link,
  }: Project) => {
    return (
      <main>
        <header>
          <DialogTitle  style={{ cursor: isLive ? 'pointer' : 'default' }}>
            {name} {isLive ? <a href={`${link}`} target="_blank" className="text-green-900 text-sm ml-1">(Live)</a> : <a className="text-red-900 text-sm ml-1">(Demo)</a>}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </header>
        
        <div className="flex flex-col justify-start">
          <p className="text-md font-bold text-gray-700 mt-4 mb-4 text-start">
            Description
          </p>
  
          {features?.map((feature, index) => (
            <div key={index} className="flex flex-row items-center space-x-2">
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-gray-600 text-sm">{feature}</p>
            </div>
          ))}
        </div>
  
        <div className="flex flex-col justify-start">
          <p className="text-md font-bold text-gray-700 mt-4 mb-4 text-start">
            Technologies Used
          </p>
  
          <div className="flex flex-wrap mt-1">
            {technologies?.map((tech, index) => (
              <Button key={index} variant="secondary" className="mr-2 mb-2 hover:bg-gray-300">
                {tech}
              </Button>
            ))}
          </div>
        </div>
  
        <div className="flex flex-col justify-start">
          <p className="text-sm text-gray-700 mt-4 mb-4 text-start">
            Screenshots:
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-11/12 mx-auto">
          {imagesArray?.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-1/2 p-2">
              <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className="object-cover w-full"
              />
            </div>
          ))}
        </div>
      </main>
    );
  };
  


const ProjectComponent = ({
  index,
  image,
  name,
  description,
  technologies,
  imagesArray,
  features,
  isLive,
  link
}: Project) => {
  return (
    <main>
      <Dialog>
        <DialogTrigger className="w-full">
          <ProjectCard
            index={index}
            image={image}
            name={name}
            description={description}
          />
        </DialogTrigger>
        <DialogContent className="max-w-3xl w-full h-[80vh] overflow-y-auto mx-auto">
          <ProjectBody
            description={description || ""}
            index={index}
            image={image}
            name={name}
            technologies={technologies}
            imagesArray={imagesArray}
            features={features}
            isLive={isLive}
            link={link}
          />
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default ProjectComponent;
