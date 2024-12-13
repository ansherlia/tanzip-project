import { CgDetailsMore } from "react-icons/cg";
import { BsBoxArrowLeft } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";

import { Link } from "react-router-dom";
function Card({ data }) {
  const { cover, field_title, name, description, id } = data;
  return (
    <div className="bg-white mx-2 my-4  text-[10px] sm:text-[15px] text-violet-700 rounded-lg p-2  shadow-md">
      <img src={cover} alt="image-package" />
      <div className="flex justify-between m-2 ">
        <div className="flex text-slate-700 justify-between w-[100%] my-5">
          <p className="text-slate-700 md:text-sm">{name}</p>
          <p>{field_title}</p>
        </div>
      </div>
      <button className="flex  border justify-center text-white py-1 px-2 rounded-md bg-violet-500  w-[100%] text-center text-violet-00 mx-auto hover:bg-violet-400  transition-colors duration-300">
        <Link
          className="flex items-center  justify-center text-white py-1 px-2 rounded-md   w-[100%] text-center text-violet-00 mx-auto   "
          to={`/admin/${id}`}
        > 
          مشاهده اموزش <BsFillCaretLeftFill />
        </Link>
      </button>
    </div>
  );
}

export default Card;
