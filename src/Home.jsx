import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
function Home() {
  const [room, setRoom] = useState("");
  const navigate=useNavigate();
  const handleRoom=()=>{
    navigate(`room/${room}`)
  }
  return (
    <>
      <input
        type="text"
        value={room}
        onChange={(e) => {
          setRoom(e.target.value);
        }}
        placeholder="enter your room.."
      />
      <button onClick={handleRoom}>join</button>
    </>
  );
}
export default Home;
