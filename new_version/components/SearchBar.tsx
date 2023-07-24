import { useRouter } from "next/router";
import { useState } from "react";

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
      <input
        type="text"
        id="searchQuery"
        placeholder="Bleach"
        value={query}
        onChange={handleOnChange}
        className="rounded-full bg-MAIN py-2 px-4 border-none outline-none focus:border-MAIN text-PRIMARY placeholder:text-PRIMARY_TWO"
      />
    </form>
  );
};

export default SearchBar;
