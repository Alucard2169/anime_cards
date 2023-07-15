import Image from "next/image";
import Link from 'next/link'
import logo from '@/public/favicon.png'
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
      <nav className="z-50 fixed  w-full py-2 px-4 bg-PRIMARY">
        <ul className="flex justify-between">
          <li>
            <Link href="/content">
              <Image src={logo} alt="logo" width="30" height="30" />
            </Link>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </nav>
    );
}
 
export default Navbar;