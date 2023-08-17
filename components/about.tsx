"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Starting in 2015, I proudly wore my graduation cap, symbolizing countless late-night coding sessions, tough algorithms, and breakthroughs. Equipped with a strong foundation, I ventured into the wide world of software development.Driven by a passion for both frontend and backend technologies, I explored the world of React.js, Angular.js, Node.js, and more. Embracing the mobile landscape, I mastered React Native to craft smooth experiences across different devices. In the realm of mobile apps, I rode alongside Android Studio and XCode, ensuring perfection with TestFlight and TestFairy.What sets me apart is more than just coding languages. I collaborate closely with clients, understanding their visions and needs to create solutions that match their dreams.

      Here I standЧa Full-Stack Jedi, harmonizing logic, creativity, and collaboration. Each project adds to my journey, a testament to my endless pursuit of excellence. With every line of code, I leave my mark on the digital canvas, guiding others on their remarkable paths.
    
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
