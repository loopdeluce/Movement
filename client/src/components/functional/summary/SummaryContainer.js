import { useEffect, useState } from "react";
import ActivityDonut from "./ActivityDonut";
import UOMFilter from "./UOMFilter";

function SummaryContainer() {
  const [unitOfMeasure, setUnitOfMeasure] = useState("number");

  useEffect(() => {
    fetch(
      `users/${
        JSON.parse(sessionStorage.getItem(user)).id
      }/activities/${sessionStorage.getItem("uom")}/2022`
    )
      .then((response) => response.json())
      .then((summary) => {
        sessionStorage.setItem("summary", JSON.stringify(summary));
      });
  }, [unitOfMeasure]);

  function handleUnitOfMeasureChange(uom) {
    setUnitOfMeasure(uom);
    sessionStorage.setItem("uom", uom);
  }
  return (
    <div class="bg-white mt-10 ml-10 rounded-lg w-max">
      <div>
        <UOMFilter
          unitOfMeasure={unitOfMeasure}
          handleUnitOfMeasureChange={handleUnitOfMeasureChange}
        />
      </div>
      <div>
        <ActivityDonut />
      </div>
    </div>
  );
}

export default SummaryContainer;
