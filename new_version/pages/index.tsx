import HomepageIcon from '@/components/HomePageIcon';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-56 w-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-bold text-white">
        <HomepageIcon/>
      </h1>
      <div className="flex flex-col justify-center gap-6">
        <p className='text-white'>Search and view details about you favorite anime or manga</p>
        <button className="m-auto bg-PRIMARY py-2 px-4 rounded-full text-xl text-MAIN font-semibold hover:scale-110 hover:bg-PRIMARY_TWO hover:text-NUTRAL transition-all duration-100 ease-in ">
          <Link href="/content">START YOUR JOURNEY</Link>
        </button>
      </div>
    </main>
  );
}
