import HomepageIcon from "@/components/HomePageIcon";
import background1 from "@/public/wall1.png";
import background2 from "@/public/wall2.png";
import background3 from "@/public/wall3.png";
import background4 from "@/public/wall4.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  let backgroundArray = [background1, background2, background3, background4];
  const [selectedBackground, setSelectedBackground] = useState(0);


   useEffect(() => {
     // Set up the interval for background rotation
     const interval = setInterval(() => {
       setSelectedBackground((prevValue) =>
         prevValue === backgroundArray.length - 1 ? 0 : prevValue + 1
       );
     }, 10000);

     // Clear the interval when the component unmounts
     return () => clearInterval(interval);
   }, [backgroundArray.length]);

  return (
    <main className="relative pt-72 bg-fixed bg-center bg-cover  flex flex-col justify-center items-center gap-10">
      <HomepageIcon/>
      <div className="flex flex-col z-20 justify-center gap-6 text-center px-4 sm:px-0">
        <p className="text-white">
          Search and view details about your favorite anime or manga
        </p>
        <button className="m-auto bg-PRIMARY py-1 px-2 text-md sm:text-xl sm:py-2 sm:px-4 rounded-full text-MAIN font-semibold hover:scale-110 hover:bg-PRIMARY_TWO hover:text-NUTRAL transition-all duration-100 ease-in">
          <Link href="/content">START YOUR JOURNEY</Link>
        </button>
      </div>


      <div className="fixed top-0 left-0 z-10 w-screen h-full">
        <div className="fixed top-0 left-0 bg-black w-screen h-screen opacity-60"></div>
        <Image
          src={backgroundArray[selectedBackground]}
          alt="test"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </main>
  );
}
