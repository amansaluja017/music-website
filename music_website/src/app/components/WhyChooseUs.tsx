"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Expert Instructors",
        description:
            "Learn from industry-leading professionals with decades of experience. Our instructors are passionate musicians and dedicated teachers who provide personalized guidance to help you achieve your musical goals.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Expert Instructors
            </div>
        ),
    },
    {
        title: "Comprehensive Curriculum",
        description:
            "From classical to contemporary, our curriculum covers all genres and skill levels. Whether you're a beginner or advanced musician, we offer structured learning paths that ensure steady progress and mastery of your chosen instrument.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Comprehensive Curriculum
            </div>
        ),
    },
    {
        title: "State-of-the-Art Facilities",
        description:
            "Practice and perform in our modern, fully-equipped studios. Access professional-grade instruments, recording equipment, and practice rooms designed for optimal acoustics and comfort.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Modern Facilities
            </div>
        ),
    },
    {
        title: "Performance Opportunities",
        description:
            "Showcase your talents through regular recitals, concerts, and collaborative events. Build confidence, gain stage experience, and connect with fellow musicians in our supportive community.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                Performance Opportunities
            </div>
        ),
    },
];

function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
