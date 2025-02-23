'use client'
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import courseData from "../data/music_data.json"
import { p } from "motion/react-client";
import Link from "next/link";

interface Courses {
    id: number,
    image: string,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Courses) => course.isFeatured);

    return (
        <div className='py-12 bg-gray-900 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-semibold text-[#137972]'>FEATURED COURSES</h1>
                <p className='text-4xl font-bold'>Learn With the Best</p>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Courses) => {
                        return (
                            <div className="flex justify-center" key={course.id}>
                                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex-grow">
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.title}
                                    </p>
                                    <p className="text-sm text-center text-neutral-600 dark:text-neutral-400 flex-grow">
                                        {course.description}
                                    </p>
                                    <p className="text-sm text-right mt-3 text-neutral-500 dark:text-neutral-500">
                                        ~<i>by</i>   {course.instructor}
                                    </p>
                                    <div className="flex items-center">
                                        <Link href={`/courses/${course.slug}`} className="rounded-full flex justify-center items-center pl-4 pr-1 py-1 text-white text-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span>Buy now </span>
                                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                                ₹{course.price}
                                            </span>
                                        </Link>
                                    </div>
                                </BackgroundGradient>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-10">
                <button className="px-6 py-3 dark:bg-zinc-900 dark:hover:bg-zinc-950 dark:text-white rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
                    View all Courses
                </button>
            </div>
        </div>
    )
};

export default FeaturedCourses