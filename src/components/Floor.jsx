import React from "react";
import Elevator from "./Elevator";
import FloorButton from "./Buttons/FloorButton";

const Floor = ({ currentFloor, actualFloor, handleFloorClick }) => {
  return (
    <div className="h-full bg-white relative p-5 border border-gray-800">
      {currentFloor === actualFloor && <Elevator />}
      <FloorButton label={`${actualFloor}`} onClick={() => handleFloorClick()} />
    </div>
  );
};

export default Floor;
