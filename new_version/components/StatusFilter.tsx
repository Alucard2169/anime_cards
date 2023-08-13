

const StatusFilter = () => {
    return (
      <div>
        <h3 className="text-purple-500">Status</h3>
        <ul className="mt-2 grid grid-cols-3 gap-4">
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">Airing</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">Upcoming</button>
          </li>
          <li>
            <button className="p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200">Complete</button>
          </li>
        </ul>
      </div>
    );
}
 
export default StatusFilter;