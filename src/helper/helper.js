const filterData = (data, category) => {
  if (!category || category === "همه") return data;
  const filteredData = data.filter((item) => {
    return item.field_title.includes(category);
  });
  return filteredData;
};

const searchData = (data, search) => {
  if (!search) return data;
  const searchedData = data.filter((item) => {
    return item.name.trim().includes(search);
  });
  return searchedData;
};
const createObjectQuery = (currentQuery, newQuery) => {
  if (newQuery.category === "همه") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};
export { filterData, searchData, createObjectQuery };
