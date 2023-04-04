import { useContext } from "react";
import { SearchTerm } from "../context/appContext";
import {IoIosArrowDropdown} from 'react-icons/io'
import { useState} from 'react';

const QuerySection = ({total}) => {

   const  {setQuery} = useContext(SearchTerm)

     const [name, setName] = useState("random");
    const [active, setActive] = useState(false);

    const handleFilterBtn = () => {
        setActive(active ? false : true)
    }
    
    const handlefilterChoice = (e) => {
        const value = e.target.dataset.filter;
        setQuery(`/top/${value}`)
        setName(value)
        setActive(false)
    } 


    return ( 
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
     );
}
 
export default QuerySection;