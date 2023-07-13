import Image from "next/image";
import logo from '@/public/favicon.png'
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
      <nav className="fixed  w-full py-2 px-4 bg-PRIMARY">
        <ul className="flex justify-between">
          <li><Image src={logo} alt="logo" width="30" height="30"/></li>
          <li><SearchBar/></li>
        </ul>
      </nav>
    );
}
 
export default Navbar;