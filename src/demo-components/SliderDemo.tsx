import React from 'react';
import * as Slider from '@radix-ui/react-slider';

export const SliderDemo = () => (
  <form>
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[200px] h-5"
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
    >
      <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-primary-700 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb className="block w-5 h-5 bg-white rounded-[10px] hover:bg-violet3 focus:outline-none" />
    </Slider.Root>
  </form>
);