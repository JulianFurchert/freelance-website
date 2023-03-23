import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { motion, useScroll, useTransform } from "framer-motion"

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export const SwitchDemo = () => (
  <form>
    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
      <Switch.Root className="w-12 h-7 p-[2px] bg-gray-300 flex justify-start rounded-full relative data-[state=checked]:bg-primary-700 data-[state=checked]:justify-end outline-none cursor-default">
        <Switch.Thumb asChild>
          <motion.div layout transition={spring} className="block w-6 h-6 bg-white rounded-full"/>
        </Switch.Thumb>
      </Switch.Root>
    </div>
  </form>
);