"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [currentTime, setCurrentTime] = useState<string>('');

  const updateTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    };
    setCurrentTime(now.toLocaleString('en-US', options));
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <div className="paper">
      <div className="w-full mt-[20px] h-[calc(100%-20px)] bg-[repeating-linear-gradient(white_0px,_white_60px,_#6091b3_63px)] md:mt-[30px] md:h-[calc(100%-30px)] md:bg-[repeating-linear-gradient(white_0px,_white_80px,_#6091b3_84px)] lg:mt-[40px] lg:h-[calc(100%-40px)] lg:bg-[repeating-linear-gradient(white_0px,_white_100px,_#6091b3_105px)]">
        <div className="text">
          <p className="text-red-500 text-[15px] leading-[40px] md:text-[32px] lg:text-[40px] lg:leading-[70px] ">{currentTime}</p>
          <a className="text-[#1d5473]" href="https://workoutfoods.com/">Protein Powders</a><br />
          <a className="text-[#1d5473]" href="https://workoutfoods.com/">Protein Bars</a><br />
          <a className="text-[#7d8f9d]">Supplements</a><br />
          <a className="text-[#7d8f9d]">Apparel</a><br />
        </div>
      </div>
      <Image
        src="/logo.svg"
        alt="logo"
        width={200}
        height={200}
        className="w-[80px] md:w-[120px] lg:w-[150px] xl:w-[170px] 2xl:w-[180px] absolute top-[30px] right-2"
      />
      <div className="holes hole-top flex items-center">
        <Image
          src="/new-animated.gif"
          alt="logo"
          width={200}
          height={200}
          className=""
        />
      </div>
    </div>
  );
}
