import {useState } from "react"

import MainButton from "./MainButton";
import Answer from "./Answer";

type respProp={
    resp:string|React.ReactNode;
    func:React.Dispatch<React.SetStateAction<string|null>>

}
const Response = ({resp,func}:respProp) => {
    let [state,setState]=useState<boolean>(false);
    console.log(func);
  return (
    <>
    <div>{resp}</div>
    <button onClick={()=>{
        setState(true);
    }}>Questions</button>
    {
       state&&<><Answer data={"Main Menu"}/><MainButton/></>
    }
    </>

  )
}

export default Response