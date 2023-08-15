import { useGetFilter } from "@/context/FilterContext";
import { FC, useEffect, useState } from "react";

interface DataProps {
  id: string;
  value: string;
}

interface FilterOptionsProps {
  handleFilter: (filterQuery: any) => void;
  filterName: string;
  data: DataProps[];
  heading: string;
  reset: boolean;
}

const FilterOptions: FC<FilterOptionsProps> = ({
  handleFilter,
  filterName,
  data,
  heading,
  reset
}) => {
  const contextValue = useGetFilter();
  const { filter, setFilter } = contextValue;

  const [active, setActive] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeFilter = (query: string) => {
    const updatedFilter = {
      ...filter,
      [filterName]: query,
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

    useEffect(() => {
      // Reset selectedType when the reset prop changes
      if (reset) {
        setSelectedType("");
      }
    }, [reset]);

  return (
    <div>
      <h4 className="text-purple-500">{heading}</h4>
      <ul className="mt-2 grid grid-cols-3 gap-4">
        {data.map((inst) => (
          <li key={inst.id}>
            <button
              className={`text-sm p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200 ${
                active && selectedType === inst.value
                  ? "bg-white !text-black"
                  : ""
              }`}
              onClick={() => handleClick(inst.value)}
            >
              {inst.id.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterOptions;
