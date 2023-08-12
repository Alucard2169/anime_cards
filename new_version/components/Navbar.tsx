import logo from '@/public/favicon.png';
import Image from "next/image";
import Link from 'next/link';
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
      <nav className="z-50 fixed top-0  w-full py-2 px-4 bg-transparent">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              <Image src={logo} alt="logo" width="30" height="30" />
            </Link>
          </li>
          <li>
            <ul className='flex gap-2 sm:gap-6 items-center'>
              <li className='text-white text-xs sm:text-sm cursor-pointer hover:text-purple-600 transition-all duration-100'><Link href={`/${'top'}/content`}>Top Anime</Link></li>
              <li className='text-white text-xs sm:text-sm cursor-pointer hover:text-purple-600 transition-all duration-100'>Random</li>
            </ul>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;