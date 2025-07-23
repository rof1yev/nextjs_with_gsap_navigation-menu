import Cards from "../components/cards";

const WorkPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <h1 className="text-4xl">
          Works <sup>(03)</sup>
        </h1>
      </div>
      <div className="min-h-screen">
        <Cards />
      </div>
    </>
  );
};

export default WorkPage;
