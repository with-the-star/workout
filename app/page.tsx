"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Loading from '@/components/loading';
import IconLogo from '@/components/icons/IconLogo';
import First from '@/components/icons/lines/First';
import Second from '@/components/icons/lines/Second';
import Third from '@/components/icons/lines/Third';
import Fourth from '@/components/icons/lines/Fourth';
import Fifth from '@/components/icons/lines/Fifth';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const getFormattedDate = (): string => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear().toString().slice(-2);

    return `${month}-${day}-${year}`;
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Link href='https://workoutfoods.com/' className='overflow-hidden w-full h-screen flex flex-col gap-[50px] justify-between px-[25px] pt-[50px] md:px-[80px] md:pt-[30px] lg:px-[150px] lg:pt-[100px] xl:items-center'>
      <link rel="preload" href="/3D_Notebook3.png" as="image" />
      <div className='flex flex-row  max-w-lg md:max-w-2xl lg:max-w-3xl justify-between xl:gap-[200px]'>
        <Link href="/">
          <IconLogo className="h-[40px] md:h-[60px] lg:h-[120px]" />
        </Link>
        <div className='flex flex-col gap-[2px] text-[12px] md:text-[15px] lg:text-[18px] -mt-[8px]'>
          <h3 className='font-bold text-[20px] md:text-[22px] lg:text-[25px]'>Welcome to Workout</h3>
          <div>
            We are a small company that<br />
            makes high-quality organic<br />
            foods and supplements with<br />
            the utmost of care. We think<br />
            that what you put in your body<br />
            is just as important as how<br />
            <div className='flex gap-2'>
              <span>
                hard you work it out.
              </span>
              <Image
                src="/blue-dumbbell-icon.png"
                alt="book"
                width={1000}
                height={1000}
                className="w-[32px]"
              />
            </div>
            <br />
            <Link href='/' className='underline text-red-500'>Click here to visit our store.</Link><br />
            Thank you!
          </div>
        </div>
      </div>
      <div className='w-full max-w-5xl flex justify-end font-semibold font-inkfree bottom-0 relative -rotate-[4deg] ml-0 lg:ml-[160px]'>
        <Image
          priority
          src="/3D_Notebook3.png"
          alt="book"
          width={1000}
          height={1000}
          className="max-w-[900px] w-full h-auto"
        />
        <div className='absolute top-[15px] sm:top-[30px] md:top-[40px] lg:top-[50px] left-[100px] sm:left-[140px] md:left-[210px] lg:left-[280px] xl:left-[350px] text-[14px] sm:text-[20px] md:text-[25px] lg:text-[32px] xl:text-[36px]'>
          <p>{getFormattedDate()}</p><br />
          <p className='flex gap-8'><span>flat bench</span><span>135 × 10</span></p>
          <p className='flex gap-8'><First className='w-[60px] sm:w-[100px] md:w-[140px] lg:w-[160px]' /><span>20 × 10</span></p>
          <p className='flex gap-8'><Second className='w-[60px] sm:w-[100px] md:w-[140px] lg:w-[160px]' /><span>185 × 10</span></p>
          <p className='flex gap-8'><Third className='w-[60px] sm:w-[100px] md:w-[140px] lg:w-[160px]' /><span>205 × 8</span></p>
          <p className='flex gap-8'><Fourth className='w-[60px] sm:w-[100px] md:w-[140px] lg:w-[160px]' /><span>225 × 6</span></p><br />
          <p className='flex gap-8'><span>cable fly</span><span>20 × 10</span></p>
          <p className='flex gap-8'><First className='w-[60px] sm:w-[100px] md:w-[140px] lg:w-[160px]' /><span>65 × 10</span></p>
          <p className='flex gap-8'><Fifth className='w-[60px] sm:w-[100px] md:w-[140px] lg:w-[160px]' /><span>70s × 10</span></p>
        </div>
      </div>
    </Link>
  );
}
