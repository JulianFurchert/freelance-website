import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'react-feather';

export const AccordionDemo = () => (
  <Accordion.Root
    className="bg-white w-[500px] rounded-2xl shadow-xl shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem: React.FC<Accordion.AccordionItemProps> = ({ children, ...props }) => (
  <Accordion.Item 
    className='mt-px overflow-hidden border-b border-b-gray-300 first:mt-0 first:rounded-t-2xl last:rounded-b-2xl last:border-b-0' 
    {...props}
  >
    {children}
  </Accordion.Item>
);

const AccordionTrigger: React.FC<Accordion.AccordionTriggerProps> = ({ children, ...props }) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger 
      className='text-black group flex h-16 flex-1 cursor-pointer items-center justify-between bg-white px-6 text-lg font-semibold leading-none outline-none' 
      {...props}
    >
      {children}
      <ChevronDown
        className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
);


const AccordionContent: React.FC<Accordion.AccordionContentProps> = ({ children, className, ...props }) => (
  <Accordion.Content
    className='text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]' 
    {...props}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
);