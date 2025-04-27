"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// Projects Section component
const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projects
        </h2>
      </Link>

      {/* Grid for displaying projects */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Mapping through projects and rendering each one */}
        {projects.map((project) => (
          <Modall key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};

// Modal component for each project
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        {/* Modal trigger button */}
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
          <div
            className="relative w-[400px] h-auto rounded-lg overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            {/* Image of the project */}
            <Image
              className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
              src={project.src}
              alt={project.title}
              width={300}
              height={300}
            />
            {/* Gradient overlay with title and category */}
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
              <div className="flex flex-col h-full items-start justify-end p-6">
                <div className="text-lg text-left text-white">{project.title}</div>
                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ModalTrigger>

        {/* Modal body */}
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              {/* Project contents inside modal */}
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>

          {/* Modal footer with buttons */}
          <ModalFooter className="gap-4">
            {/* Cancel button */}
            <button className="px-2 py-1 bg-gray-200 text-black border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            {/* Visit button linking to the live project */}
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white text-sm px-2 py-1 rounded-md border border-black w-28">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

// Project contents displayed inside the modal
const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      {/* Project title */}
      <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center mb-8">
        {project.title}
      </h4>

      {/* Skills section */}
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        {/* Frontend skills */}
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600">Frontend</p>
          {/* Display frontend skills */}
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>

        {/* Backend skills */}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600">Backend</p>
            {/* Display backend skills */}
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>

      {/* Project content */}
      {project.content}
    </>
  );
};
