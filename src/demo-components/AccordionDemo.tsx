import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'react-feather';
import { motion, AnimatePresence } from 'framer-motion';


const spring = {
  type: "spring", 
  duration: 0.5, 
  bounce: 0.1
};
export const AccordionDemo = () => {
  const [value, setValue] = React.useState<string | undefined>(undefined)

  return (
    <Accordion.Root
      className="bg-white w-[500px] shadow-xl rounded-2xl shadow-black/5"
      type="single"
      defaultValue="item-1"
      collapsible
      value={value}
      onValueChange={setValue}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger isOpen={value === 'item-1'}>Is it accessible?</AccordionTrigger>
        <AccordionContent isOpen={value === 'item-1'}>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger isOpen={value === 'item-2'}>Is it unstyled?</AccordionTrigger>
        <AccordionContent isOpen={value === 'item-2'}>
          Yes. Its unstyled by default, giving you freedom over the look and feel.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger isOpen={value === 'item-3'}>Can it be animated?</AccordionTrigger>
        <AccordionContent isOpen={value === 'item-3'}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
}

const AccordionItem: React.FC<Accordion.AccordionItemProps> = ({ children, ...props }) => (
  <Accordion.Item 
    className='mt-px overflow-hidden border-b border-b-gray-300 first:mt-0 first:rounded-t-2xl last:rounded-b-2xl last:border-b-0'
    {...props} 
  >
      {children}
  </Accordion.Item>
);

const AccordionTrigger: React.FC<Accordion.AccordionTriggerProps & {isOpen: boolean}> = ({ children, isOpen, ...props }) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger 
      className='text-black group flex h-16 flex-1 cursor-pointer items-center justify-between bg-white px-6 text-lg font-semibold leading-none outline-none' 
      {...props}
    >
      {children}
      <motion.div
        key="chevron"
        initial="collapsed"
        animate={isOpen ? 'open' : 'collapsed'}
        transition={spring}            
        variants={{
          open: { rotate: 180 },
          collapsed: { rotate: 0 }
        }}
      >
        <ChevronDown aria-hidden />
      </motion.div>
    </Accordion.Trigger>
  </Accordion.Header>
);

const AccordionContent: React.FC<Accordion.AccordionContentProps & { isOpen: boolean }> = ({ children, className, key,isOpen, ...props }) => (
  <Accordion.Content forceMount asChild {...props} className='text-mauve11 bg-mauve2 data-[state=open]:h-auto data-[state=closed]:h-0 overflow-hidden text-[15px]'>
    <AnimatePresence initial={false}>
       {isOpen && ( 
          <motion.div 
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={spring}            
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
          >
            <motion.div layout className="pb-5 px-5">{children}</motion.div>
          </motion.div>
       )}
      </AnimatePresence>
  </Accordion.Content>
);