import React from 'react';
import Image from 'next/image'

export const images = [
  "/images/gallery-image-2.jpg",
  "/images/gallery-image-3.jpg",
  "/images/gallery-image-4.jpg"
];

export const CardDemo = () => (
  <div className='bg-white w-[320px] rounded-2xl shadow-xl shadow-black/5 overflow-hidden'>
    <Image src={images[1]} alt="Picture of the author" width={320} height={160} />
    <div className='p-8 flex flex-col gap-4'>
      <h3 className='text-xl font-semibold'>Scaling your Site</h3>
      <p className='text-base'>Learn more about hosting build for scale and reliability</p>
    </div>
  </div>
);