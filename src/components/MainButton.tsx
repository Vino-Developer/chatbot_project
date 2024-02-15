import {Fragment, useEffect, useState } from "react"
import Answer from "./Answer";
import Response from "./Response";
import Features from "./features/Features";
import KnowMore from "./knowmore/KnowMore";
import Purpose from "./Purpose";
import { chatBotProps } from "./ChatBot";


const MainButton = ({search}:chatBotProps) => {
   
    let initalQuestions=["Purpose FireFlink","Features","Know More..."];
    let [ans,setAns]=useState<string|null>(null);
    let [res,setResp]=useState<string|React.ReactNode>("");

    console.log(search);
    let handleClick = (val: string|null) => {
     
       let newVal=val?.toLowerCase();
         switch (newVal) {
          
          case "purpose fireflink": {
              setResp(<Purpose/>);
          return setAns(val)
          }
          case "features": {
              setResp(<Features/>)
            return setAns(val);
          }
          case "know more...": {
            console.log(val);
             setResp(<KnowMore/>)
            return setAns(val);
          }
          case "exit":{
            setResp("Thank You...")
            return setAns(val);
          }
          default: {
            console.log(val);
            // Handle default case if needed
            return setAns(val);
          }
            
        }
      };
      useEffect(()=>{
     
        handleClick(search)
      
       
     },[search])
  return (
    <div>
         {
            
            initalQuestions.map((val,i)=>{
                console.log(val);
                return(
                    <div>
                    <Fragment key={i}>
                        {
                         <button onClick={()=>handleClick(val)}>{val}</button>
                       }
                       
                      
                    </Fragment>
                    
                    </div>
                )
            })
       
      }
       
       {
        ans && <><Answer data={ans}></Answer><Response resp={res} func={setAns}/></>
       }
    </div>
  )
}

export default MainButton