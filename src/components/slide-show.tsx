// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// SlideShow component: Displays images in a carousel with zoom effect
const SlideShow = ({
  images,
  orientation = "landscape",
}: {
  images: string[];
  orientation?: "landscape" | "portrait";
}) => {
  const [hovering, setHovering] = useState<number | null>(null); // State for hover effect per slide
  const isPortrait = orientation === "portrait";

  return (
    <div
      className={isPortrait ? "flex justify-center max-w-[500px] mx-auto" : ""}
    >
      <Splide
        options={{
          autoplay: "true", // Enable auto-play for the carousel
          perPage: 1, // Show one image at a time
          start: 0, // Start at the first image
          rewind: true, // Allow looping through the carousel
          padding: isPortrait
            ? { left: "0", right: "0" }
            : { left: "3rem", right: "3rem" }, // Less padding for portrait
          gap: "1rem", // Gap between slides
          width: isPortrait ? "100%" : "100%", // Full width within container
        }}
        hasTrack={false} // Disable track (background of carousel)
      >
        <SplideTrack>
          {images.map((image, idx) => (
            <SplideSlide key={idx} className="flex items-center justify-center">
              <Dialog>
                {/* Trigger for the dialog to show full image on click */}
                <DialogTrigger
                  className={`relative ${isPortrait ? "mx-auto" : "w-full"}`}
                  onMouseEnter={() => setHovering(idx)} // Set hovering to current slide index
                  onMouseLeave={() => setHovering(null)} // Reset hovering
                >
                  <Image
                    src={image}
                    alt="screenshot"
                    width={isPortrait ? 400 : 1000}
                    height={isPortrait ? 800 : 1000}
                    className={`rounded-lg ${
                      isPortrait
                        ? "h-auto w-auto max-h-[600px] max-w-full"
                        : "w-full h-auto"
                    }`}
                    style={isPortrait ? { objectFit: "contain" } : undefined}
                  />
                  <AnimatePresence>
                    {hovering === idx && (
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
                <DialogContent
                  className={`${
                    isPortrait ? "max-w-fit" : "min-w-[90vw]"
                  } max-h-[90vh] bg-transparent outline-none border-none p-4`}
                >
                  <DialogHeader className="w-full">
                    {/* Displaying image filename as description */}
                    <DialogDescription>
                      {image.split("/").pop()}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={image}
                      alt="screenshot"
                      width={isPortrait ? 600 : 1920}
                      height={isPortrait ? 1200 : 1080}
                      className={
                        isPortrait
                          ? "h-auto w-auto max-h-[80vh]"
                          : "w-full h-auto"
                      }
                      style={{ objectFit: "contain" }}
                    />
                  </div>
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
    </div>
  );
};

export default SlideShow;
