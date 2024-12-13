function CoursesCard({ data }) {
  console.log(data);
  return (
    <div className="mx-3">
      <video src={data.file} controls></video>
      <div className="flex justify-between py-4 px-1 text-slate-600">
        <h3>{data.name}</h3>
        <h5>زمان : {data.duration} </h5>
      </div>
    </div>
  );
}

export default CoursesCard;
