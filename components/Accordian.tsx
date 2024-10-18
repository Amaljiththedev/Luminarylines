import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { useState } from "react";
  
  export function AccordionDemo() {
    const [openItem, setOpenItem] = useState<string | null>(null); // Track the currently open item
  
    const handleToggle = (value: string) => {
      // Open the clicked item; keep it open
      setOpenItem(value);
    };
  
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={() => handleToggle("item-1")}>
            Module 1: Overview
          </AccordionTrigger>
          {openItem === "item-1" && (
            <AccordionContent>
              This module provides an overview of the course content and objectives.
            </AccordionContent>
          )}
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger onClick={() => handleToggle("item-2")}>
            Module 2: Accessibility
          </AccordionTrigger>
          {openItem === "item-2" && (
            <AccordionContent>
              This module covers the principles of accessibility and WAI-ARIA standards.
            </AccordionContent>
          )}
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger onClick={() => handleToggle("item-3")}>
            Module 3: Styling
          </AccordionTrigger>
          {openItem === "item-3" && (
            <AccordionContent>
              In this module, we discuss styling components to match the overall aesthetic.
            </AccordionContent>
          )}
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger onClick={() => handleToggle("item-4")}>
            Module 4: Animation
          </AccordionTrigger>
          {openItem === "item-4" && (
            <AccordionContent>
              This module explains how to add animations to components for a better user experience.
            </AccordionContent>
          )}
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger onClick={() => handleToggle("item-5")}>
            Module 5: Responsiveness
          </AccordionTrigger>
          {openItem === "item-5" && (
            <AccordionContent>
              Learn how to make your components responsive across different screen sizes.
            </AccordionContent>
          )}
        </AccordionItem>
      </Accordion>
    );
  }
  