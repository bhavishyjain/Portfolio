"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { config } from "@/data/config";
import Link from "next/link";

// Social media button configuration
const BUTTONS = [
  {
    name: "Github",
    href: config.social.github,
    icon: <SiGithub size={"24"} color={"#fff"} />, // Github icon
  },
  {
    name: "LinkedIn",
    href: config.social.linkedin,
    icon: <SiLinkedin size={"24"} color={"#fff"} />, // LinkedIn icon
  },
  {
    name: "Twitter",
    href: config.social.twitter,
    icon: <SiTwitter size={"24"} color={"#fff"} />, // Twitter icon
  },
  {
    name: "Instagram",
    href: config.social.instagram,
    icon: <SiInstagram size={"24"} color={"#fff"} />, // Instagram icon
  },
];

// Social media buttons component
const SocialMediaButtons = () => {
  const ref = useRef<HTMLDivElement>(null);
  // Detects if the component is in view and triggers animation once
  const show = useInView(ref, { once: true });

  return (
    <div ref={ref} className="z-10">
      {/* Renders the buttons only when the component is in view */}
      {show &&
        BUTTONS.map((button) => (
          <Link href={button.href} key={button.name} target="_blank">
            <Button variant={"ghost"}>{button.icon}</Button> {/* Renders button with the respective icon */}
          </Link>
        ))}
    </div>
  );
};

export default SocialMediaButtons;
