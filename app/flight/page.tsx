import PostFlightComponent from "./PostFlightComponent";
import RecordTableComponent from "./RecordTableComponent";

const flight = () => {
  return (
    <div className="flex flex-col h-screen md:overflow-hidden">
      <div className="flex">
        <PostFlightComponent />
      </div>
      <div className="flex-grow ">
        <RecordTableComponent />
      </div>
    </div>
  );
};

export default flight;
