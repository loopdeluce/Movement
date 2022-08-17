import { useState } from "react";
import { monthDay, timeOfDay } from "../../helpers";
import { secondsToHoursMinutesSeconds } from "../../helpers";
import { useHistory } from "react-router-dom";

function SessionForm({
  selectedMovement,
  movementTypes,
  handleSelection,
  handleSessionReset,
  handleMovementReset,
  sessionMovements,
}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    session_name: "",
    movement_type: selectedMovement,
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

    setFormData({ ...formData, [name]: value });
  }

  function handleResume(e) {
    e.preventDefault();
    history.push("/home/tracker/record");
  }

  function handleDeleteMovement(e) {
    e.preventDefault();
    handleMovementReset();
    // remove the movement details part of the form
  }

  function handleSaveSession(e) {
    e.preventDefault();
    console.log("Save session");
  }

  function handleAddMovement(e) {
    e.preventDefault();
    handleMovementReset();
    history.push("/home/tracker/movement");
  }

  function handleDeleteSession(e) {
    e.preventDefault();
    handleSessionReset();
    history.push("/home");
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
            name="session_name"
            class="rounded-md font-semibold border border-gray-300 text-gray-900 focus:outline-0 focus:border-1 focus:border-black block flex-1 min-w-0 w-full text-sm sm:text-base p-2.5"
            placeholder={`${monthDay(
              sessionStorage.getItem("SessionStart")
            )} ${timeOfDay(
              sessionStorage.getItem("SessionStart")
            )} ${selectedMovement}`}
            value={formData.session_name}
            onChange={handleFormChange}
          ></input>
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
              name="description"
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
                name="movement_type"
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
            onClick={handleAddMovement}
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
