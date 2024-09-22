'use client';
import { SkillsList } from '@/constants';
import React, { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MySkills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const filteredSkills = selectedCategory === 'all'
    ? SkillsList
    : SkillsList.filter(skill => skill?.category === selectedCategory);

  return (
    <main className="px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center sm:text-left"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
            My Skills
          </h1>
          <div className="w-full sm:w-auto">
            <Select onValueChange={value => setSelectedCategory(value)}>
              <SelectTrigger className="w-[100%] lg:w-[180px] md:w-[180px]">
                <SelectValue placeholder="All Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Frontend">FrontEnd</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Database">Database</SelectItem>
                <SelectItem value="TechOps">Technologies</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Skills Grid Container */}
        <div className="grid gap-6 mt-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
          {filteredSkills.map((skill, index) => (
            <SkillCardWithAnimation
              key={skill?.id}
              skill={skill}
              index={index}
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
            />
          ))}
        </div>
      </motion.div>
    </main>
  );
};

const SkillCardWithAnimation = ({ skill, index, visibleCount, setVisibleCount }:{ skill:any, index:Number, visibleCount:any, setVisibleCount:any }) => {
 
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && visibleCount === index) {
      
      setTimeout(() => {
        setVisibleCount((prev:number) => prev + 1);
      }, 300);
    }
  }, [inView, index, visibleCount, setVisibleCount]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visibleCount > index ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
      }}
    >
      <SkillsCard name={skill?.name || ''} image={skill?.image || ''} />
    </motion.div>
  );
};

export default MySkills;
