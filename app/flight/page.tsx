import { useForm } from "react-hook-form";
import PostFlightComponent from "./PostFlightComponent";
import RecordTableComponent from "./RecordTableComponent";
import InflightTableComponent from "./InFlightTableComponent";

const flight = () => {
  return (
    <div className="flex flex-col md:overflow-hidden">
      <div className="flex justify-center items-center">
        <PostFlightComponent />
      </div>
      <div className="flex flex-col xl:flex-row z-0 ml-16 mt-4">
        <div className="flex-grow border-2 mr-2 rounded-lg">
          <h1 className="text-center">In Flight</h1>
          <InflightTableComponent />
        </div>
        <div className="flex-grow mt-4 border-2 xl:ml-2 xl:mt-0 rounded-lg">
          <h1 className="text-center">Arrived</h1>
          <RecordTableComponent />
        </div>
      </div>
    </div>
  );
};

export default flight;
