import MovementCard from "./MovementCard";
import { useHistory } from "react-router-dom";

function MovementChoose({ movementTypes, selectedMovement, handleSelection }) {
  const history = useHistory();

  function handleDismiss(e) {
    e.preventDefault();
    handleSelection("Workout");
    sessionStorage.setItem("selectedMovement", "Workout");
    history.push("/home/tracker/record");
  }

  return (
    <div class="flex justify-center">
      <div class="space-y-2 pb-5 my-10 bg-white rounded-2xl w-9/12">
        <div class="flex pt-7 px-10  justify-between mb-5 ">
          <h1 class=" text-xl sm:text-2xl text-left text-black sm:text-3xl font-heading_bold">
            Choose a Movement
          </h1>
          <h2
            class="text-md sm:text-lg text-left text-jungle hover:underline"
            onClick={handleDismiss}
          >
            Dismiss
          </h2>
        </div>

        <div class="border-b-2 border-gray-300 mx-8 "></div>

        <div class="text-left px-10 max-h-screen overflow-y-auto">
          {movementTypes.map((category, index) => {
            return (
              <>
                <strong class="block text-md font-medium text-gray-400 pt-2 uppercase">
                  {category[0]}
                </strong>

                <ul key={index} class="mt-1">
                  <MovementCard
                    categoryMovements={category[1]}
                    selectedMovement={selectedMovement}
                    handleSelection={handleSelection}
                  />
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovementChoose;
