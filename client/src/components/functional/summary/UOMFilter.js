function UOMFilter({ unitOfMeasure, handleUnitOfMeasureChange }) {
  function handleRadioChoose(e) {
    handleUnitOfMeasureChange(e.target.id);
  }

  return (
    <div class="p-5 bg-white rounded-lg mt-10 ">
      {/* <h3 class="mb-2 font-bold text-jungle">Unit of Measure</h3> */}
      <form>
        <ul class="items-center w-full text-sm font-medium text-jungle bg-white rounded-lg border-2 border-jungle sm:flex ">
          <li class="w-full border-b-2 border-jungle sm:border-b-2 sm:border-r-2 hover:bg-jungle_100">
            <div class="flex items-center pl-3">
              <input
                id="number"
                type="radio"
                checked={unitOfMeasure === "number"}
                name="UOM"
                class="w-4 h-4 text-jungle"
                onChange={handleRadioChoose}
              />
              <label
                for="number"
                class="py-3 ml-2 w-full text-sm font-medium text-jungle font-semibold"
              >
                Number of Movements{" "}
              </label>
            </div>
          </li>
          <li class="w-full border-b-2 border-jungle sm:border-b-2 hover:bg-jungle_100">
            <div class="flex items-center pl-3">
              <input
                id="time"
                type="radio"
                checked={unitOfMeasure === "time"}
                name="UOM"
                class="w-4 h-4 text-jungle"
                onChange={handleRadioChoose}
              />
              <label
                for="time"
                class="py-3 ml-2 w-full text-sm font-medium text-jungle font-semibold"
              >
                Time of Movement
              </label>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default UOMFilter;
