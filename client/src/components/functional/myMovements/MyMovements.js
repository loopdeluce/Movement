import { useState, useEffect, useContext } from "react";
import MyMovementCard from "./MyMovementCard";
import { NewSessionContext } from "../../../context/newSession";

function MyMovements() {
  const [myMovementSessions, setMyMovementSessions] = useState([]);
  const [sessionCounter, handleNewSession] = useContext(NewSessionContext);
  const userId = JSON.parse(sessionStorage.getItem("user")).id;
  let myMovementCards = [<MyMovementCard />, <MyMovementCard />];

  useEffect(() => {
    fetch(`/users/${userId}/movement_sessions`)
      .then((response) => response.json())
      .then((sessions) => {
        setMyMovementSessions(sessions);
      });
  }, [sessionCounter]);

  return (
    <div class="flex grow mt-10 ml-24">
      <div class="container flex justify-center flex-col">
        {myMovementSessions.length > 0 ? (
          myMovementSessions.map((session, index) => {
            return <MyMovementCard key={index} session={session} />;
          })
        ) : (
          <div class="bg-white rounded-lg h-24 m-24">
            <h1>Record a movement to get started!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyMovements;
