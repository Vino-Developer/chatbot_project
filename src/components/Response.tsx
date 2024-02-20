import {useEffect, useState } from "react"

import MainButton from "./MainButton";
import Answer from "./Answer";

type respProp={
    resp:string|React.ReactNode;
    func:React.Dispatch<React.SetStateAction<string|null>>

}
const Response = ({resp,func}:respProp) => {
    let [state,setState]=useState<boolean>(false);
    const [time,setTime]=useState<boolean>(false);
    const [load,setLoad]=useState<boolean>(false);
    console.log(func);

    useEffect(()=>{
      setTimeout(()=>{
        setTime(true);
      },3000);

      setTimeout(()=>{
        setLoad(true);
      },1900)
    },[])
  return (
    <>
    <div>{resp}</div>
    {
      time&&<button onClick={()=>{
        setState(true);
    }}>Questions</button>
    }
    {load?"":"typing..."}
    {
       state&&<><Answer data={"Main Menu"}/><MainButton search={null}/></>
    }
    </>

  )
}

export default Response