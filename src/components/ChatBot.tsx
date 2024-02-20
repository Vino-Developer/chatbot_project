import { useEffect, useState } from "react"

import MainButton from "./MainButton";
 
export type chatBotProps={
  search:string|null
}
const ChatBot =({search}:chatBotProps) => {


    let [name]=useState<string>("Ramya");
    let [wait,setWait]=useState<boolean>(false)
  

    useEffect(()=>{
      setTimeout(()=>{
         setWait(true);
      },1500)
    },[])
   

  return (
    <div>
        <div className="request" key={1}>
          <h2>Hi {name}</h2>
          <p>How can i help you?</p>
    
     
          {wait&&<MainButton search={search} ></MainButton>}
        </div>
    </div>
  )
}

export default ChatBot