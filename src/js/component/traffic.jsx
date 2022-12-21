import React from "react";
import { useState } from "react";

export function Traffic() {
  const [luz, setLuz] = useState("");
  return (
    <>
      <h1>Traffic</h1>
      <div className="border rounded-4 container d-flex justify-content flex-column">
        <button
          className={luz === "red" ? "red encendido" : "red"}
          onClick={()=>{
            setLuz("red");
      
          }}
        ></button>
        <button className={luz === "yellow" ? "yellow encendido" : "yellow"}
          onClick={() => {
            setLuz("yellow");
          }}></button>
        <button className={luz === "green" ? "green encendido" : "green"}
          onClick={() => {
            setLuz("green");
          }}></button>
      </div>
    </>
  );
}
