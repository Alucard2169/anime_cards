import { useGetFilter } from "@/context/FilterContext";
import { FC, useState } from "react";

interface TypeFilterProps {
  handleFilter: (filterQuery: any) => void;
}

const TypeFilter: FC<TypeFilterProps> = ({ handleFilter }) => {
  const contextValue = useGetFilter();
  const { filter, setFilter } = contextValue;

  const [active, setActive] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeFilter = (query: string) => {
    const updatedFilter = {
      ...filter,
      type: query,
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

  const types = ["tv", "movie", "special", "ova", "ona", "music"];

  return (
    <div>
      <h4 className="text-purple-500">Type</h4>
      <ul className="mt-2 grid grid-cols-3 gap-4">
        {types.map((type) => (
          <li key={type}>
            <button
              className={`p-1 rounded-md text-white font-bold bg-purple-600 w-full hover:bg-purple-950 transition-all duration-200 ${
                active && selectedType === type ? "bg-white text-black" : ""
              }`}
              onClick={() => handleClick(type)}
            >
              {type.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TypeFilter;
