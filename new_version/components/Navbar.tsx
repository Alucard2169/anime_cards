import logo from '@/public/favicon.png';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import SearchBar from './SearchBar';

type NavbarProps = {page: boolean}

const Navbar: FC<NavbarProps> = ({ page }) => {

  const route = useRouter()

  return (
    <nav
      className={`z-40 fixed top-0  w-full py-2 px-4 ${
        page ? "bg-transparent" : "bg-black"
      }`}
    >
      <ul className="flex justify-between items-center">
        <li>
          <Link href="/">
            <Image src={logo} alt="logo" width="30" height="30" />
          </Link>
        </li>
        {route.pathname !== "/auth" ? (
          <>
            <li className="text-white ml-auto text-xs sm:text-sm cursor-pointer hover:text-purple-600 transition-all duration-100">
              <Link href={`/${"top"}/content`}>Top Anime</Link>
            </li>

            <li className="ml-auto mr-5">
              <SearchBar />
            </li>
            <li>
              <button className="ml-auto bg-purple-600  text-white font-semibold rounded-md p-1 text-sm hover:bg-MAIN transition-all duration-100">
                <Link href={`/auth`}>Sign-in</Link>
              </button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
}
 
export default Navbar;