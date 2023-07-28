import { Link, useNavigate } from 'react-router-dom';
import favicon from '../favicon.png';
import '../style/navbar.css';
import search_icon from '../style/search_icon.svg';

import { useContext } from 'react';
import { SearchTerm } from '../context/appContext';

const Navbar = () => {
    
    const navigate = useNavigate()
    const { setQuery} = useContext(SearchTerm);

   
    const nameSearch = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            setQuery(`/anime/${e.target.value}`)
            navigate('/anime')
        }
        else {
            return
        }
    }

    const handleChange = (e) => {
        if (e.target.value === '') {
            setQuery('/api')
        }
        else {
            return
        }
    }

    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={favicon} className="mainLogo" alt="hello" />
            </Link>
          </div>
              <a href="https://anime-cards-alpha.vercel.app/" target='_blank' className='newVer'>New Version</a>
          <div className="left">
            <label>
              <img src={search_icon} alt="" />
              <input
                type="text"
                id="search_query"
                className="search"
                placeholder="search for an anime, e.g. Bleach"
                onKeyUp={nameSearch}
                onChange={handleChange}
              />
            </label>
          </div>
        </nav>
      </>
    );
}
 
export default Navbar;