import HomepageIcon from '@/components/HomePageIcon';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-56 w-screen flex flex-col justify-center items-center gap-10">
     
        <HomepageIcon/>
     
      <div className="flex flex-col justify-center gap-6 text-center px-4 sm:px-0">
        <p className='text-white'>Search and view details about you favorite anime or manga</p>
        <button className="m-auto bg-PRIMARY py-1 px-2 text-md sm:text-xl sm:py-2 sm:px-4 rounded-full text-MAIN font-semibold hover:scale-110 hover:bg-PRIMARY_TWO hover:text-NUTRAL transition-all duration-100 ease-in ">
          <Link href="/content">START YOUR JOURNEY</Link>
        </button>
      </div>
    </main>
  );
}
