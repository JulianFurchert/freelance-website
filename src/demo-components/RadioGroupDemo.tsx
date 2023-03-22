import React from 'react';
import classNames from 'classnames';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root
      className="flex flex-col bg-white w-60 rounded-2xl shadow-xl shadow-black/5"
      defaultValue="default"
      aria-label="View density"
    >
      <RadioGroupItem value="default">
        Default
      </RadioGroupItem>
      <RadioGroupItem value="comfortable">
        Comfortable
      </RadioGroupItem>
      <RadioGroupItem value="compact">
        Compact
      </RadioGroupItem>
    </RadioGroup.Root>
  </form>
);


type RadioGroupItemRef = React.ElementRef<typeof RadioGroup.Item>

const RadioGroupItem = React.forwardRef<RadioGroupItemRef, RadioGroup.RadioGroupItemProps>(({ children, className, ...props }, forwardedRef) => (
  <div  className={classNames('bg-white flex items-center p-4 border-b border-b-gray-300 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl', className)}>
    <RadioGroup.Item
      className="bg-white w-5 h-5 rounded-full shadow-[0_0_0_1px] focus:shadow-[0_0_0_1px] focus:shadow-black outline-none cursor-default"
      id="r3"
      {...props}
      ref={forwardedRef}
    >
      <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-black" />
    </RadioGroup.Item>
    <label className="text-black text-base leading-none pl-3" htmlFor="r3">
      {children}
    </label>
  </div>
));
