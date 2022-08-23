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
    <div class="bg-white mt-10 ml-10 rounded-lg w-max">
      <div>
        <UOMFilter
          unitOfMeasure={unitOfMeasure}
          handleUnitOfMeasureChange={handleUnitOfMeasureChange}
        />
      </div>
      <div>
        <SummaryStats />
      </div>
      <div>{summary !== null ? <ActivityDonut /> : null}</div>
      <div>{summary !== null ? <MultiSeries /> : null}</div>
    </div>
  );
}

export default SummaryContainer;
