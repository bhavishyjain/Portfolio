// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";

import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// SlideShow component: Displays images in a carousel with zoom effect
const SlideShow = ({ images }: { images: string[] }) => {
  const [hovering, setHovering] = useState(false);  // State for hover effect

  return (
    <Splide
      options={{
        autoplay: "true", // Enable auto-play for the carousel
        perPage: 1, // Show one image at a time
        start: 0, // Start at the first image
        rewind: true, // Allow looping through the carousel
        padding: { left: '3rem', right: '3rem' }, // Padding for carousel content
        gap: "1rem", // Gap between slides
      }}
      hasTrack={false} // Disable track (background of carousel)
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <Dialog>
              {/* Trigger for the dialog to show full image on click */}
              <DialogTrigger
                className="relative"
                onMouseEnter={() => setHovering(true)} // Set hovering to true when mouse enters
                onMouseLeave={() => setHovering(false)} // Set hovering to false when mouse leaves
              >
                <Image
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg h-auto"
                />
                <AnimatePresence>
                  {hovering && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px]"
                      initial={{ opacity: 0 }} // Start opacity at 0
                      animate={{ opacity: 1 }} // Animate opacity to 1 when hovering
                      exit={{ opacity: 0 }} // Exit animation when hovering ends
                    >
                      Click to zoom
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogTrigger>

              {/* Dialog content that shows when image is clicked */}
              <DialogContent className="min-w-[90vw] h-[90vh] bg-transparent outline-none border-none p-0 m-0">
                <DialogHeader className="w-full">
                  {/* Displaying image filename as description */}
                  <DialogDescription>
                    {image.split("/").pop()}
                  </DialogDescription>
                </DialogHeader>
                <Image
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full"
                  style={{ objectFit: "contain", width: "100vw" }}
                />
              </DialogContent>
            </Dialog>
          </SplideSlide>
        ))}
      </SplideTrack>
      {/* Progress bar for the carousel */}
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};

export default SlideShow;
