import { useState, useContext } from "react";
import { monthDay, timeOfDay } from "../../helpers";
import { secondsToHoursMinutesSeconds } from "../../helpers";
import { useHistory } from "react-router-dom";
import { NewSessionContext } from "../../../context/newSession";

function SessionForm({
  movementTypes,
  handleSelection,
  handleSessionReset,
  handleMovementReset,
}) {
  const history = useHistory();
  const [showMovementDetails, setShowMovementDetails] = useState(true);
  const [sessionCounter, handleNewSession] = useContext(NewSessionContext);
  const [formData, setFormData] = useState({
    title:
      sessionStorage.getItem("sessionTitle") === null
        ? ""
        : sessionStorage.getItem("sessionTitle"),
    datetime_session_start: sessionStorage.getItem("sessionStart"),
    movement_type: sessionStorage.getItem("selectedMovement"),
    description: "",
    private_notes: "",
    is_stats_public: true,
    exertion: 5,
    time_seconds: parseInt(sessionStorage.getItem("counter")),
  });

  function handleFormChange(e) {
    e.preventDefault();
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    if (e.target.name === "movement_type") {
      sessionStorage.setItem("selectedMovement", e.target.value);
    }

    if (e.target.name === "title") {
      sessionStorage.setItem("sessionTitle", e.target.value);
    }

    setFormData({ ...formData, [name]: value });
  }

  function handleResume(e) {
    e.preventDefault();
    history.push("/home/tracker/record");
  }

  function handleDeleteMovement(e) {
    e.preventDefault();
    if (sessionMovementsDoNotExist()) {
      handleSessionReset();
      history.push("/home");
    } else {
      setShowMovementDetails(false);
      handleMovementReset();
    }
    // remove the movement details part of the form
  }

  function handleSaveSession(e) {
    e.preventDefault();

    if (sessionMovementsDoNotExist()) {
      postSession()
        .then((response) => response.json())
        .then((session) => {
          sessionStorage.setItem("sessionId", session.id);
          postMovement(session.id).then(() => {
            handleNewSession();
            handleSessionReset();
            history.push("/home");
          });
        });
    } else if (
      sessionMovementsDoNotExist() === false &&
      showMovementDetails == true
    ) {
      const sessionId = sessionStorage.getItem("sessionId");
      postMovement(sessionId).then(() => {
        handleNewSession();
        handleSessionReset();
        history.push("/home");
      });
    } else if (
      sessionMovementsDoNotExist() === false &&
      showMovementDetails == false
    ) {
      handleNewSession();
      handleSessionReset();
      history.push("/home");
    }
  }

  function handleAddMovementBackend(e) {
    e.preventDefault();
    sessionStorage.setItem("sessionTitle", formData.title);

    if (sessionMovementsDoNotExist()) {
      postSession()
        .then((response) => response.json())
        .then((session) => {
          sessionStorage.setItem("sessionId", session.id);
          postMovement(session.id)
            .then((response) => response.json())
            .then((movement) => handleAddMovementFrontend(movement));
        });
    } else if (
      sessionMovementsDoNotExist() === false &&
      showMovementDetails === true
    ) {
      patchSession()
        .then((response) => response.json())
        .then((session) => {
          postMovement(session.id)
            .then((response) => response.json())
            .then((movement) => handleAddMovementFrontend(movement));
        });
    } else if (
      sessionMovementsDoNotExist() === false &&
      showMovementDetails === false
    ) {
      handleMovementReset();
      history.push("/home/tracker/movement");
    }
  }

  function handleDeleteSession(e) {
    e.preventDefault();
    if (sessionMovementsDoNotExist()) {
      handleSessionReset();
      history.push("/home");
    } else {
      deleteSession().then(() => {
        handleSessionReset();
        history.push("/home");
      });
    }
  }

  function sessionMovementsDoNotExist() {
    return sessionStorage.getItem("sessionMovements") === null;
  }

  function postSession() {
    const title =
      formData.title === ""
        ? `${monthDay(formData.datetime_session_start)} ${timeOfDay(
            formData.datetime_session_start
          )} Session`
        : formData.title;
    const session = {
      title: title,
      datetime_session_start: formData.datetime_session_start,
    };
    return fetch("/movement_sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(session),
    });
  }

  function patchSession() {
    const title =
      formData.title === ""
        ? `${monthDay(formData.datetime_session_start)} ${timeOfDay(
            formData.datetime_session_start
          )} Session`
        : formData.title;
    const session = {
      title: title,
      datetime_session_start: formData.datetime_session_start,
    };
    const sessionId = parseInt(sessionStorage.getItem("sessionId"));
    return fetch(`/movement_sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(session),
    });
  }

  function deleteSession() {
    const sessionId = parseInt(sessionStorage.getItem("sessionId"));
    return fetch(`/movement_sessions/${sessionId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }

  function postMovement(sessionId) {
    const movement = {
      user_id: JSON.parse(sessionStorage.getItem("user")).id,
      movement_type: formData.movement_type,
      description: formData.description,
      private_notes: formData.private_notes,
      is_stats_public: formData.is_stats_public,
      datetime_activity_finish: sessionStorage.getItem("movementFinish"),
      time_seconds: formData.time_seconds,
      exertion: formData.exertion,
    };
    return fetch(`/movement_sessions/${sessionId}/activities`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movement),
    });
  }

  function handleAddMovementFrontend(movement) {
    const newMovement = [
      movement.movement_type,
      movement.activity_stat.time_seconds,
    ];
    if (sessionMovementsDoNotExist()) {
      sessionStorage.setItem("sessionMovements", JSON.stringify([newMovement]));
    } else {
      const existingMovements = JSON.parse(
        sessionStorage.getItem("sessionMovements")
      );
      existingMovements.push(newMovement);
      sessionStorage.setItem(
        "sessionMovements",
        JSON.stringify(existingMovements)
      );
    }
    handleMovementReset();
    history.push("/home/tracker/movement");
  }

  // function handleReset(e) {
  //   e.preventDefault();
  //   sessionStorage.setItem("second", "00");
  //   sessionStorage.setItem("minute", "00");
  //   sessionStorage.setItem("hour", "00");
  //   sessionStorage.setItem("counter", 0);
  // }

  return (
    <div class="flex justify-center space-y-2">
      <div class="my-10 bg-white rounded-2xl w-9/12 py-7 px-10">
        <div class="flex justify-center items-center mb-5">
          <h1 class="text-xl sm:text-2xl font-bold text-left text-black ">
            Session Details
          </h1>
        </div>
        <form>
          <input
            type="text"
            name="title"
            class="rounded-md font-semibold border border-gray-300 text-gray-900 focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm sm:text-base p-2.5"
            placeholder={`${monthDay(
              formData.datetime_session_start
            )} ${timeOfDay(formData.datetime_session_start)} Session`}
            value={formData.title}
            onChange={handleFormChange}
          ></input>
          {sessionMovementsDoNotExist() ? null : (
            <div class="mt-3">
              <h3 class="text-left font-semibold">
                Previous session movements:
              </h3>
              <ul class="px-10">
                {JSON.parse(sessionStorage.getItem("sessionMovements")).map(
                  (movement) => {
                    return (
                      <li class="text-left list-disc">
                        {movement[0]}:{" "}
                        {secondsToHoursMinutesSeconds(movement[1])}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )}
          {showMovementDetails ? (
            <div>
              <div class="border-2 border-gray-300 my-5"></div>
              <div>
                <h1 class="text-lg sm:text-xl font-bold text-left text-black text-center mb-4">
                  Movement Details
                </h1>
                <select
                  name="movement_type"
                  value={formData.movement_type}
                  class="rounded-md font-semibold border border-gray-300 text-black focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm sm:text-base p-2.5"
                  onChange={(e) => {
                    handleFormChange(e);
                    handleSelection(e.target.value);
                  }}
                >
                  {movementTypes.map((category, index) => {
                    return (
                      <optgroup key={index} label={category[0]}>
                        {category[1].map((movement, index) => {
                          return (
                            <option
                              key={index}
                              name="movement_type"
                              value={movement}
                            >
                              {movement}
                            </option>
                          );
                        })}
                      </optgroup>
                    );
                  })}
                </select>
                <textarea
                  type="text"
                  name="description"
                  class="rounded-md font-semibold border border-gray-300 text-gray-900 focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm sm:text-base p-2.5 my-5"
                  placeholder="How'd it go? Share more about your activity here."
                  value={formData.description}
                  onChange={handleFormChange}
                ></textarea>
                <textarea
                  type="text"
                  name="private_notes"
                  class="rounded-md font-semibold border border-gray-300 text-gray-900 focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm sm:text-base p-2.5"
                  placeholder="Jot down private notes here. Only you can see these."
                  value={formData.private_notes}
                  onChange={handleFormChange}
                ></textarea>
                <div class="flex justify-between mt-7 mb-4">
                  <div class=" text-gray-700 text-lg mr-20 font-semibold">
                    Make stats public
                  </div>
                  <label>
                    <div class="relative">
                      <input
                        id="toogleA"
                        type="checkbox"
                        class="sr-only"
                        name="is_stats_public"
                        checked={formData.is_stats_public}
                        onChange={handleFormChange}
                      />
                      <div class="line w-10 h-4 bg-gray-400 rounded-full shadow-inner cursor-pointer"></div>
                      <div class="dot absolute w-6 h-6 bg-jungle_200 rounded-full shadow -left-1 -top-1 transition cursor-pointer"></div>
                    </div>
                  </label>
                </div>
                <div class="flex justify-left items-center mb-3">
                  <label class="text-sm sm:text-base pr-5 font-semibold text-gray-400">
                    Exertion:
                  </label>
                  <select
                    name="exertion"
                    value={formData.exertion}
                    class="rounded-md font-semibold border border-gray-300 text-black focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm p-2.5"
                    onChange={handleFormChange}
                  >
                    <option name="exertion" value={1}>
                      1 - Restorative
                    </option>
                    <option name="exertion" value={2}>
                      2
                    </option>
                    <option name="exertion" value={3}>
                      3
                    </option>
                    <option name="exertion" value={4}>
                      4
                    </option>
                    <option name="exertion" value={5}>
                      5 - Moderate
                    </option>
                    <option name="exertion" value={6}>
                      6
                    </option>
                    <option name="exertion" value={7}>
                      7
                    </option>
                    <option name="exertion" value={8}>
                      8
                    </option>
                    <option name="exertion" value={9}>
                      9
                    </option>
                    <option name="exertion" value={10}>
                      10 - Max Effort
                    </option>
                  </select>
                </div>
                <div class="flex justify-left items-center">
                  <label class="text-sm sm:text-base pr-5 font-semibold text-gray-400">
                    Time:
                  </label>
                  <input
                    disabled
                    type="text"
                    name="time_seconds"
                    class="rounded-md font-semibold border border-gray-300 text-gray-900 focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm p-2.5"
                    placeholder={`Movement time in seconds`}
                    value={secondsToHoursMinutesSeconds(formData.time_seconds)}
                  ></input>
                </div>
                <div class="flex gap-5 justify-between gap-20 mt-4">
                  <button
                    class=" hover:underline rounded-2xl  py-2 px-3 text-jungle font-normal"
                    onClick={handleResume}
                  >
                    Resume Movement
                  </button>
                  <button
                    class=" hover:underline rounded-2xl  py-2 px-3 text-jungle font-normal"
                    onClick={handleDeleteMovement}
                  >
                    Delete Movement
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </form>
        <div class="border-2 border-gray-300 my-5"></div>

        <div class="flex justify-between items-center ">
          <button
            class="text-xs sm:text-base border-2 border-jungle bg-jungle_100 hover:bg-jungle_200 rounded-2xl py-3 px-3 text-jungle font-normal"
            onClick={handleSaveSession}
          >
            Save Session
          </button>
          <button
            class="text-xs sm:text-base border-2 border-jungle hover:bg-jungle_800 rounded-2xl py-3 px-5 text-white bg-jungle font-semibold"
            onClick={handleAddMovementBackend}
          >
            + Add Another Movement
          </button>

          <button
            class="text-xs sm:text-base border-2 border-jungle bg-jungle_100 hover:bg-jungle_200 rounded-2xl py-3 px-3 text-jungle font-normal"
            onClick={handleDeleteSession}
          >
            Delete Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default SessionForm;
