import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordianData } from "@/constants";

const FooterAccordian = () => {
  return (
    <main id="width-and-center-body">
        {
            AccordianData.map((data, index) => (
                <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={String(data.id)}>
                        <AccordionTrigger>{data.title}</AccordionTrigger>
                        <AccordionContent>
                            {data.content}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))
        }
     <br/><br/>
    </main>
  );
};

export default FooterAccordian;
