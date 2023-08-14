import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";




export type FilterOptions = {
  type: string;
  status: string;
  score: number | null;
  start_date: string;
};

interface FilterContextType {
  filter: FilterOptions;
  setFilter: React.Dispatch<React.SetStateAction<FilterOptions>>;
}
interface FilterContextProviderProps {
  children: ReactNode;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const useGetFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useGetFilter must be used within a FilterContextProvider");
  }
  return context;
};


const FilterContextProvider: FC<FilterContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<FilterOptions>({
    type: "",
    status: "",
    score: null,
    start_date: "",
  });

  const contextValue: FilterContextType = {
    filter,
    setFilter,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider, useGetFilter };
