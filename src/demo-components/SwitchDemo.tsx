import React from 'react';
import * as Switch from '@radix-ui/react-switch';

export const SwitchDemo = () => (
  <form>
    <div className="flex items-center" style={{ display: 'flex', alignItems: 'center' }}>
      <Switch.Root  className="w-[42px] h-[25px] bg-white rounded-full relative data-[state=checked]:bg-primary-700 outline-none cursor-default">
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);