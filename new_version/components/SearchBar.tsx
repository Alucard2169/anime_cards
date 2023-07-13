const SearchBar = () => {
    return ( 
        <form> 
            <input type="text" id="searchQuery" placeholder="Bleach" className="rounded-full bg-MAIN py-2 px-4 border-none outline-none focus:border-MAIN text-PRIMARY placeholder:text-PRIMARY_TWO"/>
        </form>
     );
}
 
export default SearchBar;