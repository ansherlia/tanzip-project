import { category } from "../../constants/path";
import { FaListUl } from "react-icons/fa";
import { createObjectQuery } from "../../helper/helper";
function SideBar({ setQuery }) {
  const categoryHandler = () => {
    const tagName = event.target.tagName;
    const category = event.target.innerText;
    if (tagName !== "LI") return;
    setQuery((query) => createObjectQuery(query, { category }));
  };
  return (
    <div className="bg-white px-7 mx-2 text-sm lg:text-[14px]  sm:w-[50%] md:w-[1/3] lg:w-52 h-fit mt-4 shadow-lg p-4 rounded-lg text-violet-700">
      <div className="flex items-center">
        <FaListUl />
        <h3 className="mr-2 text-md">مرتب سازی</h3>
      </div>
      <ul onClick={categoryHandler} className=" divide-y ">
        {category.map((c) => (
          <li
            className="my-2  cursor-pointer text-violet-800 hover:bg-violet-400 hover:text-white px-2 py-2 rounded-lg"
            key={c.id}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
