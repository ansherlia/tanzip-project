import { CiSearch } from "react-icons/ci";
import { createObjectQuery } from "../../helper/helper";
function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createObjectQuery(query, { search }));
  };
  return (
    <div className="flex items-center px-2 mx-auto p-1 mt-9 mb-10  ">
      <input
        className="bg-white w-[600px] py-2 px-4 rounded-md outline-none"
        type="font"
        placeholder="جستجو..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-violet-500 hover:bg-violet-400 transition-colors hover:text-white duration-200 text-white  font py-2 px-4 h-10 cursor-pointer rounded-md"
        onClick={searchHandler}
      >
        <CiSearch />
      </button>
    </div>
  );
}

export default SearchBox;
