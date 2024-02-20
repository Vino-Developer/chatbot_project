import { useEffect, useState } from "react";
import Answer from "../../Answer";
import KnowMore from "../KnowMore";


type respProp={
    resp:string|React.ReactNode;
   

}
const Container = ({resp}:respProp) => {
    let [state,setState]=useState<boolean>(false);
    const [time,setTime]=useState<boolean>(false);
    const [load,setLoad]=useState<boolean>(false);

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
    {time&&<button onClick={()=>{
        setState(true);
    }}>Back</button>}

    {
      load?"":"typing..."
    }
    {
       state&&<><Answer data={"Menu"}/><KnowMore/></>
    }
    </>

  )
}

export default Container