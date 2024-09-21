import { ProjectsList } from "@/constants";
import React from "react";

import PojectComponent from "@/components/ProjectSection/PojectComponent";

const ProjectPage = () => {
  return (
    <main id="width-and-center-body">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
        Projects
      </h1>
      <section className="mt-10">
        {ProjectsList?.map((project, index) => (
          <PojectComponent
            index={project.id}
            image={project.image}
            name={project.name}
            key={index}
            description={project.description}
            technologies={project.technologies}
            imagesArray={project.imagesArray}
            features={project.features}
            isLive={project.isLive}
            link={project.link}
           
          />
        ))}
      </section>
    </main>
  );
};

export default ProjectPage;
