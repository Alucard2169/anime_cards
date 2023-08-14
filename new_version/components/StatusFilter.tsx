import { useGetFilter } from "@/context/FilterContext";
import { FC, useState } from "react";

interface StatusFilterProps {
  handleFilter: (filterQuery: any) => void;
}

const StatusFilter:FC<StatusFilterProps> = ({handleFilter}) => {

   const contextValue = useGetFilter();
  const { filter, setFilter } = contextValue;
  

  const [active, setActive] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const handleStatusFilter = (query: string) => {
     
     const updatedFilter = {
       ...filter,
       status: query,
     };
     setFilter(updatedFilter)
     handleFilter(updatedFilter);
  };
  

   const handleClick = (query: string) => {
    if (selectedType === query) {
      setActive(false);
      setSelectedType("");
      handleStatusFilter("")
    } else {
      setActive(true);
      setSelectedType(query);
      handleStatusFilter(query)
    }
  };
   
  const status = ['airing', 'upcoming', 'complete'];

    return (
      <div>
        <h3 className="text-purple-500">Status</h3>
        <ul className="mt-2 grid grid-cols-3 gap-4">
          {status.map((state) => (
            <li key={state}>
              <button className={`p-1 text-sm rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200 ${active && selectedType === state ? "bg-white text-black" : ""
                }`} onClick={() => handleClick(state)}>
                {state.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}
 
export default StatusFilter;