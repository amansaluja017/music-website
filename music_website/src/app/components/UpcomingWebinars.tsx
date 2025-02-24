'use client'

import { HoverEffect } from "./ui/card-hover-effect";


export const projects = [
    {
        title: "Music Theory Fundamentals",
        description:
            "Master the basics of music theory including scales, chords, rhythm, and notation. Perfect for beginners starting their musical journey.",
        link: "/courses/music-theory",
    },
    {
        title: "Piano Masterclass",
        description:
            "Comprehensive piano course from beginner to advanced levels. Learn techniques, repertoire, and performance skills from professional pianists.",
        link: "/courses/piano",
    },
    {
        title: "Guitar Essentials",
        description:
            "Learn guitar from scratch with step-by-step lessons covering acoustic, electric, and classical styles. Includes practice routines and song tutorials.",
        link: "/courses/guitar",
    },
    {
        title: "Vocal Training",
        description:
            "Develop your singing voice with proper techniques, breathing exercises, and vocal warm-ups. Suitable for all skill levels.",
        link: "/courses/vocal",
    },
    {
        title: "Music Production",
        description:
            "Learn digital music production using modern DAWs, mixing techniques, and sound design. Create professional-quality tracks from home.",
        link: "/courses/production",
    },
    {
        title: "Songwriting Workshop",
        description:
            "Discover the art of songwriting, from crafting melodies to writing lyrics. Learn structure, harmony, and creative techniques.",
        link: "/courses/songwriting",
    },
];

function UpcomingWebinars() {
  return (
    <div className="py-12 bg-gray-900 flex flex-col justify-between items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="font-semibold text-[#137972]">FEATURED COURSES</h1>
        <p className="text-4xl font-bold">Learn With the Best</p>
      </div>
      <div className="mt-10">
        <div className="">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button className="px-6 py-3 dark:bg-zinc-900 dark:hover:bg-zinc-950 dark:text-white rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
          View all Courses
        </button>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
