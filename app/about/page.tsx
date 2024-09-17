import React from "react";
import "../../styles/common.css";
import Image from "next/image";
import MySkills from "@/components/Skills/MySkills";
import WorkExperience from "@/components/WorkEx/WorkExperience";

const AboutPage = () => {
  return (
    <main id="width-and-center-body">
      <section className="block md:grid md:grid-cols-2">
        <div className="flex justify-center items-center mt-[15%] md:mt-[5%]">
          <Image
            src={"/images/awanish-about.png"}
            alt="sd"
            height={300}
            width={300}
            className="rounded-full"
          />
        </div>

        <div className="flex justify-center items-center mt-[10%] sm:justify-start">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mt-[-5%]">
              About Me
            </h1>
            <p
              className="text-gray-600 text-lg mt-2 text-justify"
              id="about-paragraph"
            >
              I'm a results-driven software engineer specializing in the MERN
              Stack and Django. I build high-performance microservices handling
              1000+ requests per minute, delivering scalable solutions for
              complex projects. Innovation and exceptional results are my core
              focus.
            </p>
          </div>
        </div>
      </section>

      <br/>
      <MySkills/>
      <br/>
      <WorkExperience/>
      <br/>
    </main>
  );
};

export default AboutPage;
