import { useHistory } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [chosenPage, setChosenPage] = useState("My Movement Summary");
  const history = useHistory();
  const userFullName = `${
    JSON.parse(sessionStorage.getItem("user")).first_name
  } ${JSON.parse(sessionStorage.getItem("user")).last_name}`;

  function handleNavigation(e) {
    e.preventDefault();
    setChosenPage(e.target.textContent);
    sessionStorage.setItem("chosenPage", e.target.textContent);
    switch (e.target.textContent) {
      case "My Movement Details":
        history.push("/home/details");
        break;
      case "My Movement Summary":
        history.push("/home");
        break;
      case "Record a Movement":
        setChosenPage("My Movement Summary");
        history.push("/home/tracker/movement");
        break;
    }
  }

  return (
    <div class="flex flex-col gap-3  mt-10  sm:ml-10 ml-5 ">
      <button
        disabled
        class="text-left text-white text-sm sm:text-2xl py-2 px-5 font-heading_bold"
      >
        {userFullName}
      </button>
      <div class="border-2 border-gray-200 rounded-lg"></div>
      <button
        class={`text-left text-white font-semibold text-lg hover:bg-jungle_500 py-2 px-5 hover:rounded-xl ${
          sessionStorage.getItem("chosenPage") === "My Movement Summary"
            ? "bg-jungle_500 rounded-xl"
            : null
        }`}
        onClick={handleNavigation}
      >
        My Movement Summary
      </button>
      <button
        class={`text-left text-white font-semibold text-sm sm:text-lg hover:bg-jungle_500 py-2 px-5 hover:rounded-xl ${
          sessionStorage.getItem("chosenPage") === "My Movement Details"
            ? "bg-jungle_500 rounded-xl"
            : null
        } `}
        onClick={handleNavigation}
      >
        My Movement Details
      </button>

      <button
        class={`text-left text-white font-semibold text-lg hover:bg-jungle_500 py-2 px-5 hover:rounded-xl ${
          sessionStorage.getItem("chosenPage") === "Record a Movement"
            ? "bg-jungle_500 rounded-xl"
            : null
        }`}
        onClick={handleNavigation}
      >
        Record a Movement
      </button>
    </div>
  );
}

export default NavBar;
