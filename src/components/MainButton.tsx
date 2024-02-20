import {Fragment, useEffect, useState } from "react"
import Answer from "./Answer";
import Response from "./Response";
import Features from "./features/Features";
import KnowMore from "./knowmore/KnowMore";
import Purpose from "./Purpose";
import { chatBotProps } from "./ChatBot";
import Thankyou from "./Thankyou";
import { useMyContext } from "../Chat";
import Wrongmessage from "./Wrongmessage";


const MainButton = ({search}:chatBotProps) => {
   
    let initalQuestions=["Purpose FireFlink","Features","Know More...","exit"];
    let [ans,setAns]=useState<string|null>(null);
    let [res,setResp]=useState<string|React.ReactNode>("");
    let{setUser}=useMyContext();
    console.log(search);
    let handleClick = (val: string|null) => {
     
       let newVal=val?.toLowerCase();
         switch (newVal) {
          
          case "purpose fireflink": {
              setTimeout(()=>{
                setResp(<Purpose/>);
              },2000);
          return setAns(val)
          }
          case "features": {
              setTimeout(()=>{
                setResp(<Features/>)
              },2000);
            return setAns(val);
          }
          case "know more...": {
            
            console.log(val);
            setTimeout(()=>{
              setResp(<KnowMore/>)
            },2000);
            return setAns(val);
          }
          case "exit":{
            setResp(<Thankyou/>)
            setUser(false)
            return setAns(val);
          }
          default: {
            if(newVal!=="products"&&newVal!=="contact us"&&newVal!=="resourses"){
            setResp(<Wrongmessage/>)
            return setAns(val);
            }
          }
            
        }
      };
      useEffect(()=>{
     
        if(search!==null){
          handleClick(search)
        }
      
       
     },[search])
  return (
    <div>
         {
            
            initalQuestions.map((val,i)=>{
                console.log(val);
                return(
                    <div key={i}>
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