import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import MyMovementCard from "./MyMovementCard";
import { NewSessionContext } from "../../../context/newSession";

function MyMovements() {
  const [myMovementSessions, setMyMovementSessions] = useState([]);
  const [errors, setErrors] = useState([]);
  const [sessionCounter, handleNewSession] = useContext(NewSessionContext);
  const userId = JSON.parse(sessionStorage.getItem("user")).id;
  const history = useHistory();

  useEffect(() => {
    fetch(`/users/${userId}/movement_sessions`)
      .then((response) => response.json())
      .then((sessions) => {
        if (sessions.length === 0) {
          setErrors(["No Movements Yet"]);
        } else {
          setErrors([]);
          setMyMovementSessions(sessions);
        }
      });
  }, [sessionCounter]);

  function handleClick(e) {
    e.preventDefault();
    console.log("click");
    history.push("/home/tracker/movement");
  }

  return (
    <div class="flex w-full h-full  justify-around items-center">
      {errors.length > 0 ? (
        <div class="flex flex-col justify-around bg-white my-10  rounded-lg py-10 ml-16">
          <h1 class="text-6xl text-black  font-heading_bold px-40 pt-5 pb-5">
            Welcome!
          </h1>
          <h1
            class="text-2xl text-jungle mb-5 font-heading_bold hover:underline"
            onClick={handleClick}
          >
            {" "}
            Record a movement to begin
          </h1>
        </div>
      ) : (
        <div class="container flex justify-center w-8/12 flex-col">
          <div class="my-5 bg-white rounded-lg p-5">
            <h1 class="text-xl sm:text-2xl text-center text-black sm:text-3xl font-heading_bold">
              All Movement Details
            </h1>
            <div class="border-b-2 border-gray-300 mx-8 mt-3"></div>
          </div>
          <div class="h-screen overflow-y-auto">
            {myMovementSessions.length > 0 ? (
              myMovementSessions.map((session, index) => {
                return <MyMovementCard key={index} session={session} />;
              })
            ) : (
              <div class="bg-white rounded-lg  m-24 flex items-center justify-center">
                <h1 class="font-heading_bold text-7xl py-5">Loading...</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyMovements;
