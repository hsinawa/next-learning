import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"; // Assuming you have a button component

import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Assuming you have a card component
import { Badge } from "@/components/ui/badge"; // For the rating badges
import { testimonialsData } from '@/constants';

const TestimonialsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
     
      <div className="flex flex-wrap justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
      
        <div className="w-full md:w-full">
          <Card>
            <CardContent className="p-4">
              <p className="mb-4">{testimonialsData[activeIndex].comment}</p>
              <Badge variant="secondary" className="mb-4">
                Rating: {testimonialsData[activeIndex].value}/5
              </Badge>
              <p className="font-semibold">- {testimonialsData[activeIndex].name}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={handlePrev}>&#8249;</Button>
              <Button variant="ghost" onClick={handleNext}>&#8250;</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
