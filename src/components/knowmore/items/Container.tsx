import { useState } from "react";
import Answer from "../../Answer";
import KnowMore from "../KnowMore";


type respProp={
    resp:string|React.ReactNode;
   

}
const Container = ({resp}:respProp) => {
    let [state,setState]=useState<boolean>(false);
   
  return (
    <>
    <div>{resp}</div>
    <button onClick={()=>{
        setState(true);
    }}>Back</button>
    {
       state&&<><Answer data={"Menu"}/><KnowMore/></>
    }
    </>

  )
}

export default Container