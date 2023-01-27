import favicon from './favicon.png';
import './style/navbar.css';
import search_icon from './style/search_icon.svg';
import { Link} from 'react-router-dom';
import useFetch from './usefetch';
import { useState} from 'react';
import AnimeCard from './animeCard';
import close from './style/close.svg'
import {motion} from 'framer-motion'

const Navbar = () => {

    const resultsField = document.getElementById('result');
    const cancelBtn = document.getElementById('cancel')
    const search = (query) => {
        setName(`/anime/${query}`)
        resultsField.style.display = 'block'
        cancelBtn.style.display = 'block'

    }

    const clear = () => {
        resultsField.style.display = 'none';
        cancelBtn.style.display = 'none';
        setName(null);
        document.getElementById('search_query').value = ''
    }


    const [name,setName] = useState(null)
    const nameSearch = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            search(e.target.value)
        }
        else {
            return
        }
    }

    const { data, isLoading, error } = useFetch(name);

    return ( 
        <>
        <nav className="navbar">
            <div className='logo'><Link to="/"><img src={favicon} className="mainLogo"alt="hello" /></Link></div>
            <div className="left">
                <label>
                    <img src={search_icon} alt="" />
                    <input type="text" id="search_query" className="search" placeholder="search for an anime, e.g. Bleach" onKeyUp={nameSearch} />
                </label>
            </div>
            </nav>
            <div className="result" id='result'>
                <motion.button id="cancel" onClick={clear} whileHover={{ scale: 1.1 }}><img src={close} alt="close" /></motion.button>
                {error && <div className='error'>{error}</div>}
                {isLoading && <div className='loading'></div>}
                {data && <AnimeCard anime={data} close={clear} />}
            </div>
        </>
     );
}
 
export default Navbar;