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
    <div class="mt-10 space-y-2">
      <div class="container flex justify-center flex-col  overflow-y-scroll">
        {myMovementSessions.length > 0 ? (
          myMovementSessions.map((session, index) => {
            return <MyMovementCard key={index} session={session} />;
          })
        ) : (
          <div class="bg-white rounded-lg overflow-y-auto">
            <h1>Record a movement to get started!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyMovements;
