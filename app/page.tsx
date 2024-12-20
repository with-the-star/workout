import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen text-[4.5vw]">
      <div className="flex justify-between w-full">
        <div className="max-w-2xl border-solid border-b-2 sm:border-b-4 border-b-[#a2bdd0] border-r-2 sm:border-r-4 border-r-[#e30c09] w-2/12"></div>
        <div className="flex justify-between items-end whitespace-nowrap text-[4vw] border-b-2 sm:border-b-4 border-b-[#a2bdd0] w-10/12 p-3">
          <p className="text-red-500">WED DEC 4 5:23:58 PM EST</p>
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-[100px] md:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px]"
          />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="max-w-2xl border-solid border-b-2 sm:border-b-4 border-b-[#a2bdd0] border-r-2 sm:border-r-4 border-r-[#e30c09] w-2/12">
          <Image
            src="/new-animated.gif"
            alt="logo"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="flex justify-between items-center whitespace-nowrap text-[35px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[90px] border-b-2 sm:border-b-4 border-b-[#a2bdd0] w-10/12 pl-3">
          <a className="text-[#1d5473] underline" href="https://workoutfoods.com/">Protein Powders</a>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="max-w-2xl border-solid border-b-2 sm:border-b-4 border-b-[#a2bdd0] border-r-2 sm:border-r-4 border-r-[#e30c09] w-2/12">
        </div>
        <div className="flex justify-between items-center whitespace-nowrap text-[35px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[90px] border-b-2 sm:border-b-4 border-b-[#a2bdd0] w-10/12 pl-3">
          <a className="text-[#1d5473] underline" href="https://workoutfoods.com/">Protein Bars</a>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="max-w-2xl border-solid border-b-2 sm:border-b-4 border-b-[#a2bdd0] border-r-2 sm:border-r-4 border-r-[#e30c09] w-2/12">
        </div>
        <div className="flex justify-between items-center whitespace-nowrap text-[35px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[90px] border-b-2 sm:border-b-4 border-b-[#a2bdd0] w-10/12 pl-3">
          <a className="text-[#7d8f9d]">Supplements</a>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="max-w-2xl border-solid border-b-2 sm:border-b-4 border-b-[#a2bdd0] border-r-2 sm:border-r-4 border-r-[#e30c09] w-2/12">
        </div>
        <div className="flex justify-between items-center whitespace-nowrap text-[35px] sm:text-[40px] md:text-[60px] lg:text-[75px] xl:text-[90px] border-b-2 sm:border-b-4 border-b-[#a2bdd0] w-10/12 pl-3">
          <a className="text-[#7d8f9d]">Apparel</a>
        </div>
      </div>
    </div>
  );
}
