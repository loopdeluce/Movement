import { useEffect, useState, useContext } from "react";
import { NewSessionContext } from "../../../context/newSession";
import ActivityDonut from "./ActivityDonut";
import UOMFilter from "./UOMFilter";
import MultiSeries from "./MultiSeries";
import SummaryStats from "./SummaryStats";
import { UserContext } from "../../../context/user";
import { useHistory } from "react-router-dom";

function SummaryContainer({ readyToLoad }) {
  const [unitOfMeasure, setUnitOfMeasure] = useState(
    sessionStorage.getItem("uom") === null
      ? "number"
      : sessionStorage.getItem("uom")
  );
  const [initialRender, setInitialRender] = useState(false);
  const [summary, setSummary] = useState([]);
  const [errors, setErrors] = useState([]);
  const [sessionCounter, handleNewSession] = useContext(NewSessionContext);
  // const [user, handleUserChange] = useContext(UserContext);

  const history = useHistory({ readyToLoad });

  console.log(
    `/users/${JSON.parse(sessionStorage.getItem("user")).id}/activities/${
      sessionStorage.getItem("uom") === null
        ? "number"
        : sessionStorage.getItem("uom")
    }/${2022}`
  );

  console.log(sessionCounter);

  useEffect(() => {
    console.log("sos");
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    fetch(
      `/users/${JSON.parse(sessionStorage.getItem("user")).id}/activities/${
        sessionStorage.getItem("uom") === null
          ? "number"
          : sessionStorage.getItem("uom")
      }/${currentYear}`
    )
      .then((response) => response.json())
      .then((summary) => {
        if (summary.errors) {
          setErrors(summary.errors);
        } else {
          setErrors([]);
          setSummary(summary);
          sessionStorage.setItem("summary", JSON.stringify(summary));
        }
        setInitialRender(true);
      });
  }, [unitOfMeasure, sessionCounter, readyToLoad]);

  function handleUnitOfMeasureChange(uom) {
    setUnitOfMeasure(uom);
    sessionStorage.setItem("uom", uom);
  }

  function handleClick(e) {
    e.preventDefault();
    history.push("/home/tracker/movement");
  }

  return (
    <>
      {initialRender ? (
        <div class="flex w-full h-full justify-around items-center">
          <div class="">
            {errors.length > 0 ? (
              errors.map((error) => {
                return (
                  <div class="flex flex-col justify-around bg-white my-10  rounded-lg">
                    <h1
                      key={error}
                      class="text-7xl text-black  font-heading_cursive px-40 pt-5"
                    >
                      Welcome!
                    </h1>
                    <button
                      key={error}
                      class="text-2xl text-jungle mb-5 font-heading_bold hover:underline"
                      onClick={handleClick}
                    >
                      {" "}
                      Record a movement to begin
                    </button>
                  </div>
                );
              })
            ) : (
              <>
                <div class="bg-white mt-5 ml-10 rounded-lg">
                  <UOMFilter
                    unitOfMeasure={unitOfMeasure}
                    handleUnitOfMeasureChange={handleUnitOfMeasureChange}
                  />
                </div>
                <div class="h-screen overflow-y-scroll bg-white mt-10 ml-10 rounded-lg w-max">
                  <div class="flex justify-around items-center">
                    <div>
                      <SummaryStats />
                    </div>
                    <div>{summary !== null ? <ActivityDonut /> : null}</div>
                  </div>
                  <div class="mb-5">
                    {summary !== null ? <MultiSeries /> : null}
                  </div>
                </div>{" "}
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default SummaryContainer;
