import { createContext, useState } from "react";


export const SearchTerm = createContext(null)


export const SearchTermProvider = ({children}) => {
    const [query, setQuery] = useState('/api');
    const [page,setPage] = useState(false)
    
    return (
        <SearchTerm.Provider value={{query,setQuery,page,setPage}}>
            {children}
        </SearchTerm.Provider>
    )
}
