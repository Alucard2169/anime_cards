import { useGetFilter } from "@/context/FilterContext";
import { FC, useState } from "react";



interface TimeFilterProps {
  handleFilter: (filterQuery: any) => void;
}


const TimeFilter:FC<TimeFilterProps> = ({handleFilter}) => {

    const contextValue = useGetFilter()
    const { filter, setFilter } = contextValue;
    const [active, setActive] = useState<boolean>(false);
    const [selectedType, setSelectedType] = useState<string>("");



     const handleTypeFilter = (query: string) => {
       const updatedFilter = {
         ...filter,
         start_date: query,
       };

       setFilter(updatedFilter);
       handleFilter(updatedFilter);
     };

     const handleClick = (query: string) => {
       if (selectedType === query) {
         setActive(false);
         setSelectedType("");
         handleTypeFilter("");
       } else {
         setActive(true);
         setSelectedType(query);
         handleTypeFilter(query);
       }
     };

    
    const time = [
        { text: "2020-2023", value: "2020-01-01&end_date=2023-12-31" },
        { text: "2015-2019", value: "2019-01-01 & end_date=2015-12 - 31" },
        { text:"2014-2010" ,value: "2010-01-01&end_date=2014-12-31" },
        { text:"2009-2005", value: "2009-01-01&end_date=2005-12-31" },
        { text:"2004-2000", value: "2004-01-01&end_date=2000-12-31" },
        { text:"1990s", value: "1990-01-01&end_date=1990-12-31" },
        { text:"1980s", value: "1980-01-01&end_date=1980-12-31" },
        {text:"1970s",value:"1970-01-01&end_date=1970-12-31"}
    ];

    
    return (
      <div>
        <h3 className="text-purple-600">Time</h3>

        <ul className="grid grid-cols-3 gap-3 mt-2">
          {time.map((data,i) => (
            <li key={i}>
              <button
                className={`p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200 ${
                  active && selectedType === data.value ? "bg-white text-black" : ""
                }`}
                onClick={() =>
                  handleClick(data.value)
                }
              >
                {data.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}
 
export default TimeFilter;