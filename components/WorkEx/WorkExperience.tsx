'use client'
import { WorkExperienceList } from '@/constants'
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import WorkExComponent from './WorkExComponent'

const WorkExperience = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const controls = useAnimation();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              controls.start("visible");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [controls]);

    
  return (
    <main>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
            Work Experience
          </h1>
        
        </div>
        <section className='block mt-10' ref={ref} >
        {
  WorkExperienceList?.map((workEx, index) => (
    <motion.div
    key={index}
    initial="hidden"
    animate={controls}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.5,
        },
      }),
    }}
    custom={index}
  >
    <WorkExComponent 
      key={index}
      id={workEx.id}
      role={workEx.role}
      company={workEx.company}
      duration={workEx.duration}
      description={workEx.description}
      technologies={workEx.techonolgies}  
      image={workEx.image}
    />
     </motion.div>
  ))
}

        </section>
    </main>
  )
}

export default WorkExperience