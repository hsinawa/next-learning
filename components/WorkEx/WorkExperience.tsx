import { WorkExperienceList } from '@/constants'
import React from 'react'
import WorkExComponent from './WorkExComponent'

const WorkExperience = () => {
  return (
    <main>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-20">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 sm:mb-0">
            My Work Experience
          </h1>
        
        </div>
        <section className='block mt-10' >
        {
  WorkExperienceList?.map((workEx, index) => (
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
  ))
}

        </section>
    </main>
  )
}

export default WorkExperience