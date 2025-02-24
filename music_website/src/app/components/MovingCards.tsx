"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "The music academy transformed my daughter's life. The instructors are passionate and patient, creating an environment where students truly flourish and develop their musical talents.",
    name: "Sarah Johnson",
    title: "Parent of Piano Student",
  },
  {
    quote:
      "I've been teaching music for 20 years, and this academy stands out for its commitment to excellence. Our state-of-the-art facilities and comprehensive curriculum help students reach their full potential.",
    name: "Professor David Chen",
    title: "Senior Music Instructor",
  },
  {
    quote:
      "From beginner to advanced levels, the academy provides personalized attention and structured learning paths. The diversity of instruments and genres taught here is impressive.",
    name: "Michael Rodriguez",
    title: "Guitar Department Head",
  },
  {
    quote:
      "The collaborative environment and regular performance opportunities have helped me grow not just as a musician, but as a performer. I'm grateful for the confidence I've gained.",
    name: "Emma Thompson",
    title: "Violin Student",
  },
  {
    quote:
      "What sets this academy apart is how they blend traditional teaching methods with modern technology. Students learn both classical foundations and contemporary applications.",
    name: "Dr. Lisa Park",
    title: "Music Education Director",
  },
];

function MovingCards() {
  return (
    <div className="h-[40rem] dark:bg-black w-full dark:bg-grid-white/[0.1] flex flex-col justify-center items-center overflow-hidden">
      <div className="text-3xl font-medium text-center relative top-[10rem]">
        <h2>Hear our Harmony: Voices of success</h2>
      </div>

      <div>
        <div className="h-[40rem] w-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MovingCards;
