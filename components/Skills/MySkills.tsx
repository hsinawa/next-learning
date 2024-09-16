'use client';
import { SkillsList } from '@/constants';
import React from 'react';
import SkillsCard from './SkillsCard';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MySkills = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'all'
    ? SkillsList
    : SkillsList.filter(skill => skill?.category === selectedCategory);

  return (
    <main id="width-and-center-body">
      <div className="text-center sm:text-left">
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
            My Skills
          </h1>
          <div className="w-full sm:w-auto">
            <Select onValueChange={value => setSelectedCategory(value)}>
              <SelectTrigger className="w-[100%] lg:w-[180px] md:w-[180px]">
                <SelectValue placeholder="All Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem> {/* Option to show all skills */}
                <SelectItem value="Frontend">FrontEnd</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Database">Database</SelectItem>
                <SelectItem value="TechOps">Technologies</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 mt-10 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2">
          {filteredSkills.map(skill => (
            <SkillsCard key={skill?.id} name={skill?.name || ''} image={skill?.image || ''} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MySkills;
