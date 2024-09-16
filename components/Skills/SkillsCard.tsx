import Image from 'next/image'
import React from 'react'

const SkillsCard = ({name,image}:{name:string,image:string}) => {
  return (
    <main>
     <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer" >
      <div className="flex justify-center items-center">
        <Image src={image} alt={name}  width={50} height={50} />
      </div>
      <div className="flex justify-center items-center mt-4">
        <h1 className="text-center text-lg font-bold text-gray-800">{name}</h1>
      </div>
    </div>
    </main>
  )
}

export default SkillsCard