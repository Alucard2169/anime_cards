const TypeFilter = () => {
    return (
      <div>
        <h4 className="text-purple-500">Type</h4>
        <ul className="mt-2 grid grid-cols-3 gap-4">
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">TV</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">Movie</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">Special</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">OVA</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">ONA</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">Music</button>
          </li>
        </ul>
      </div>
    );
}
 
export default TypeFilter;