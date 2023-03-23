import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
import { ChevronLeft, ChevronRight } from 'react-feather';

export const images = [
  "/images/gallery-image-2.jpg",
  "/images/gallery-image-3.jpg",
  "/images/gallery-image-4.jpg"
];

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const GalleryDemo = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = page % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-[500px] h-[280px] bg-gray-800 rounded-2xl overflow-hidden shadow-xl shadow-black/5">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="absolute"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="absolute cursor-pointer bg-white top-1/2 h-7 w-7 flex justify-center items-center font-bold z-10 right-4 rounded-full" onClick={() => paginate(1)}>
        <ChevronRight className="text-gray-600" />
      </div>
      <div className="absolute cursor-pointer bg-white top-1/2 h-7 w-7 flex justify-center items-center font-bold z-10 left-4 rounded-full" onClick={() => paginate(-1)}>
        <ChevronLeft className="text-gray-600" />
      </div>
    </div>
  );
};
