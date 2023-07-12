import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-bold">
        <span className="text-PRIMARY">Otaku</span> Cards
      </h1>
      <div className="flex flex-col justify-center gap-6">
        <p>Search and view details about you favorite anime or manga</p>
        <button className="m-auto bg-PRIMARY py-2 px-4 rounded-full text-xl text-MAIN font-semibold hover:scale-110 hover:bg-PRIMARY_TWO transition-all duration-100 ease-in ">
          START YOUR JOURNEY
        </button>
      </div>
    </main>
  );
}
