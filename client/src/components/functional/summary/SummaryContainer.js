import { useEffect, useState, useContext } from "react";
import { NewSessionContext } from "../../../context/newSession";
import ActivityDonut from "./ActivityDonut";
import UOMFilter from "./UOMFilter";
import MultiSeries from "./MultiSeries";
import SummaryStats from "./SummaryStats";

function SummaryContainer() {
  const [unitOfMeasure, setUnitOfMeasure] = useState(
    sessionStorage.getItem("uom") === null
      ? "number"
      : sessionStorage.getItem("uom")
  );
  const [summary, setSummary] = useState();
  const [sessionCounter, handleNewSession] = useContext(NewSessionContext);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    fetch(
      `/users/${JSON.parse(sessionStorage.getItem("user")).id}/activities/${
        sessionStorage.getItem("uom") === null
          ? "number"
          : sessionStorage.getItem("uom")
      }/2022`
    )
      .then((response) => response.json())
      .then((summary) => {
        setSummary(summary);
        sessionStorage.setItem("summary", JSON.stringify(summary));
      });
  }, [unitOfMeasure, sessionCounter]);

  function handleUnitOfMeasureChange(uom) {
    setUnitOfMeasure(uom);
    sessionStorage.setItem("uom", uom);
  }
  return (
    <div class="w-max">
      <div class="bg-white mt-5 ml-10 rounded-lg ">
        <UOMFilter
          unitOfMeasure={unitOfMeasure}
          handleUnitOfMeasureChange={handleUnitOfMeasureChange}
        />
      </div>
      <div class="h-screen overflow-y-scroll bg-white mt-10 ml-10 rounded-lg w-max">
        <div class="flex justify-around">
          <div>
            <SummaryStats />
          </div>
          <div>{summary !== null ? <ActivityDonut /> : null}</div>
        </div>
        <div class="mb-5">{summary !== null ? <MultiSeries /> : null}</div>
      </div>
    </div>
  );
}

export default SummaryContainer;
