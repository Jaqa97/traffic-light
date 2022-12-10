import React from "react";
import { useState } from "react";


export function Traffic() {
    const[luz, setLuz] = useState("")
  return (<>

      <h1>Traffic</h1>
      <div className="border rounded-4 container d-flex justify-content flex-column">

        <button className={luz==="red rounded-circle m-2"? "red rounded-circle m-2 encendido": "red rounded-circle m-2"} onClick={()=>{setLuz("red rounded-circle m-2")}}></button>
        <button className="yellow rounded-circle m-2"></button>
        <button className="green rounded-circle m-2"></button>
      </div>
    </>

  );
}
