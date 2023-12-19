import { useRouter } from "next/router";
import { useState } from "react";
import { LiaSearchSolid } from 'react-icons/lia';

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/result/${query}`);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="query" className="relative flex items-center">
        <LiaSearchSolid className="absolute left-2 text-PRIMARY text-sm sm:text-xl" />
        <input
          type="text"
          id="query"
          placeholder="Bleach"
          value={query}
          onChange={handleOnChange}
          className="pl-8 text-xs w-32   rounded-full bg-transparent  py-2 px-4 border-none outline-none outline-1 outline-transparents focus:outline focus:outline-PRIMARY text-PRIMARY placeholder:text-purple-300 sm:text-md  sm:pl-10 sm:w-auto transition-all duration-100"
        />
      </label>
    </form>
  );
};

export default SearchBar;
