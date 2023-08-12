import { Dosis } from 'next/font/google';
import Link from "next/link";


const dosis = Dosis({
  weight: ["200", "400"],
  subsets:["latin-ext"]
})

export default function Home() {
 
  return (
    <main className="flex justify-start items-center gap-10 bg-heroBackground bg-cover bg-no-repeat w-full min-h-screen">
      <div className="fixed top-0 left-0 bg-black w-screen h-screen opacity-80"></div>

      <section className=" z-50 flex flex-col justify-center items-center gap-6 text-center px-4 sm:px-0 sm:ml-32">
        <h1 className="text-4xl font-bold text-purple-700">ANIME CARDS</h1>
        <p className={`${dosis.className} text-white text-xl`}>
          Search and view details about your favorite anime
        </p>
        <button
          className={`${dosis.className} mt-10 z-50 w-fit py-1 px-2 text-md sm:text-xl sm:py-2 sm:px-4 outline-1 outline-PRIMARY outline rounded-full text-PRIMARY font-semibold hover:outline-none hover:text-PRIMARY transition-all duration-100 ease-in`}
        >
          <Link href="/browse/content">START YOUR JOURNEY</Link>
        </button>
      </section>
    </main>
  );
}
