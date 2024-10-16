import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Floor from "./components/Floor";
import StartProcessButton from "./components/Buttons/StartProcessButton";
import { api_url } from "./constants";

function App() {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [floorsList, setFloorsList] = useState([]);

  const postRequestedFloors = async (floorsList) => {
    try {
      const response = await axios.post(
        `${api_url}/elevator/requestedFloors`,
        {
          requestedFloors: floorsList,
          direction: floorsList[0] > currentFloor ? "up" : "down",
        }
      );
      moveElevator(response.data.requestedFloors);
    } catch (error) {
      console.error("Error posting requested floors:", error);
    }
  };

  const handleFloorClick = (floor) => {
    setFloorsList((prevFloorsList) => [...prevFloorsList, floor]);
  };

  const moveElevator = (floors) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < floors.length) {
        setCurrentFloor(floors[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center flex-col space-y-4">
      <div className="h-[600px] w-[1000px] bg-gray-500 flex flex-col p-5">
        <Floor currentFloor={currentFloor} actualFloor={3} handleFloorClick={() => handleFloorClick(3)}/>
        <Floor currentFloor={currentFloor} actualFloor={2} handleFloorClick={() => handleFloorClick(2)}/>
        <Floor currentFloor={currentFloor} actualFloor={1} handleFloorClick={() => handleFloorClick(1)}/>
      </div>
      <StartProcessButton
        onClick={() => postRequestedFloors(floorsList)}
      />
    </div>
  );
}

export default App;
