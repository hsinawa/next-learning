'use client'
import { ProjectsList } from "@/constants";
import React, { useState, useEffect } from "react";
import PojectComponent from "@/components/ProjectSection/PojectComponent";
import Testimonials from "@/components/ProjectSection/Testimonials";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../../styles/common.css'

const ProjectPage = () => {
  const [visibleCount, setVisibleCount] = useState(0);

  return (
    <main id="width-and-center-body">
      <h1 className="text-4xl font-bold mt-25 text-gray-800 mb-4 sm:mb-0">
        Projects
      </h1>
      <section className="mt-10">
        {ProjectsList?.map((project, index) => (
          <ProjectComponentWithAnimation
            key={project.id}
            project={project}
            index={index}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
          />
        ))}
      </section>
      <section className="mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
          Testimonials
        </h1>
        <Testimonials />
      </section>
    </main>
  );
};

// New component to handle animations for each project
const ProjectComponentWithAnimation = ({
  project,
  index,
  visibleCount,
  setVisibleCount,
}:{
  project:any,
  index:any,
  visibleCount:any,
  setVisibleCount:any
}) => {
  // Use `useInView` to detect when the project component is visible on screen
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the card is visible
  });

  useEffect(() => {
    if (inView && visibleCount === index) {
      // Increment the visible count only if the component becomes visible
      // and it's the next one to be shown
      setTimeout(() => {
        setVisibleCount((prev:any) => prev + 1);
      }, 300); // Add a small delay before showing the next item
    }
  }, [inView, index, visibleCount, setVisibleCount]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visibleCount > index ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
    >
      <PojectComponent
        index={project.id}
        image={project.image}
        name={project.name}
        description={project.description}
        technologies={project.technologies}
        imagesArray={project.imagesArray}
        features={project.features}
        isLive={project.isLive}
        link={project.link}
      />
    </motion.div>
  );
};

export default ProjectPage;
