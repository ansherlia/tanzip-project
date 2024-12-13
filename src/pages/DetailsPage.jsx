import { useEffect, useState } from "react";
import api from "../configs/api";
import { useParams } from "react-router-dom";
import CoursesCard from "../components/templates/CoursesCard";

function DetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  console.log(id);
  useEffect(() => {
    const fetchDataById = async () => {
      const response = await api.get(`/api/packages/${id}`);
      setItem(response.data);
    };
    fetchDataById();
  }, []);
  console.log(item);
  return (
    <div className="flex  flex-col   my-40 w-[100%] bg-slate-100 p-10 rounded-lg">
      <div className="flex flex-col sm:grid  sm:text-2xl mx-auto items-center  mb-40 mt-5 w-[100%] bg-slate-100 rounded-lg">
        <video
          className=" h-[280px] md:w-[700px] "
          src={item.intro_file}
          controls
        ></video>
        <div className="flex justify-between  flex-col w-100% my-4">
          <h3 className="text-xl mb-5 text-slate-500 md:text-2xl">
            {item.name}
          </h3>
          <p className="text-sm md:text-xl text-slate-500">
            {item.description}
          </p>
          {/* <img src={item.thumbnail} alt="" /> */}
        </div>
      </div>

      <h1
        h1
        className="text-2xl mx-3  mb-5 text-slate-600 py-1 border-b-4 border-sky-700 w-fit"
      >
        آموزش ها
      </h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {item.contents?.map((item) => (
          <CoursesCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;
