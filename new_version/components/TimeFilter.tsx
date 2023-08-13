const TimeFilter = () => {
    return ( 
        <div>
            <h3 className="text-purple-600">Time</h3>
            
            <ul className="grid grid-cols-3 gap-3 mt-2">
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">2020-2023</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">2015-2019</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">2014-2010</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">2009-2005</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">2004-2000</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">1990s</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">1980s</li>
                <li className="bg-purple-600 rounded-md text-white text-center py-1 font-bold hover:bg-purple-950 transition-all duration-200 cursor-pointer">1970s</li>
            </ul>
        </div>
     );
}
 
export default TimeFilter;