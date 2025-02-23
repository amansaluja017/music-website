'use client'

import React from 'react'
import Link from 'next/link'
import { Spotlight } from "@/app/components/ui/sportlight-new";
import { Button } from "../components/ui/moving-border";

function HeroSection() {
    return (
        <div className='flex items-center justify-center w-full h-auto md:h-[40rem] relative gap-3 overflow-hidden flex-col mx-auto'>
            <div>
                <Spotlight />
            </div>
            <div className='text-7xl font-medium'>
                Master the Art of Music

            </div>
            <div className='flex flex-wrap w-[30rem] items-center justify-center text-center'>
                <p>Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your Skills, join us to unlock your true potential.</p>
            </div>
            <div className='mt-5'>
                <Link href={'/courses'} className='p-4'>
                    <Button className='bg-black hover:bg-transparent'>Explore courses</Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection