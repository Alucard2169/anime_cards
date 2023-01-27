import useFetch from './usefetch';
import AnimeCard from './animeCard';
import './style/animeList.css'
import {useState} from 'react';
import { useContext } from 'react';
import SearchTerm from './context/AppContext';
import {IoIosArrowDropdown} from 'react-icons/io'



const AnimeList = () => {

    const { query, setQuery } = useContext(SearchTerm);

    const [name, setName] = useState("random");
    const [active, setActive] = useState(false);

    const handleFilterBtn = () => {
        setActive(active ? false : true)
        console.log(active)
    }
    
    const handlefilterChoice = (e) => {
        const value = e.target.dataset.filter;
        setQuery(`/top/${value}`)
        setName(value)
        setActive(false)
    } 

     const { data: anime, error, isLoading, total } = useFetch(query)
  
    return ( 
        <div className="home">
            <div className="det">
                <h2 className="name">{name}</h2>
                <div className='sort' id="filter">
                    <span className='current' onClick={handleFilterBtn}>Filter <IoIosArrowDropdown/></span>
                    <ul className={`filterList ${active ? 'active' : ''}`}>
                        <li data-filter="random" onClick={(e) =>  handlefilterChoice(e)}>Random</li>
                        <hr />
                        <li data-filter="airing" onClick={(e)=> handlefilterChoice(e)}>Top Airing</li>
                        <hr />
                        <li data-filter="upcoming" onClick={(e)=> handlefilterChoice(e)}>Top Upcoming</li>
                        <hr />
                        <li data-filter="popularity" onClick={(e)=> handlefilterChoice(e)}>Top By popularity</li>
                    </ul>
                </div>
                <h3 className='count'>Total : {total}</h3>
            </div>
            <div className="container">
                {error && <div>{error}</div>}
                {isLoading && <div className='loading'></div>}
                {anime && <AnimeCard anime={anime} />}
            </div>
</div>
     );
}
 
export default AnimeList;
