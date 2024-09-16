import React from "react";
import "../../styles/common.css";
import Image from "next/image";
import { SocialLinks } from "@/constants";

const HomeScreen = () => {
  return (
    <main id="width-and-center-body">
      <section className="block md:grid md:grid-cols-2">
        <div className="flex justify-center items-center mt-[15%] md:mt-[5%]">
          <Image
            src="/icons/download.png"
            alt="hero"
            width={400}
            height={400}
          />
        </div>

        <div className="flex justify-center items-center mt-[10%] sm:justify-start">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-800">Awanish Mishra</h1>
            <p className="text-gray-600 text-lg mt-2">
              I'm a Full Stack Developer and an Influencer
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                Hire Me
              </a>
              <a
                href={`${SocialLinks[2].href}`}
                target="_blank"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md ml-4 hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300"
              >
                My Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
