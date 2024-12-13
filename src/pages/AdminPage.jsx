import { useEffect, useState } from "react";
import api from "../configs/api";
import Card from "../components/templates/Card";
import SideBar from "../components/templates/SideBar";
import { filterData, searchData } from "../helper/helper";
import SearchBox from "../components/templates/SearchBox";
import { useSearchParams } from "react-router-dom";
function AdminPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/api/packages");
      setData(response.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setDisplayed(data);
  }, [data]);
  useEffect(() => {
    setSearchParams(query);
    let finalData = filterData(data, query.category);
    finalData = searchData(finalData, query.search);
    setDisplayed(finalData);
  }, [query]);
  console.log(query);
  return (
    <div className="container  mx-auto ">
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="lg:flex ">
        <SideBar setQuery={setQuery} />
        <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {displayed.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
