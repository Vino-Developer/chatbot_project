import React, { Fragment, useEffect, useState } from "react"
import Products from "./items/Products";
import ContactUs from "./items/ContactUs";
import Resourses from "./items/Resourses";
import Container from "./items/Container";
import Answer from "../Answer";
import { useMyContext } from "../../Chat";

const KnowMore = () => {

  let {values_1}=useMyContext();
    let values=["Products","Contact Us","Resourses"];
    let[state,setState]=useState<boolean>(false);
    let [ans,setAns]=useState<string|null>(null);
    let [comp,setComp]=useState<React.ReactNode|string>("");
    
    let handleClick = (val: string) => {
      let newValue=val?.toLowerCase();
        setState(true);
        switch (newValue) {
          
          case "products": {
            
            setTimeout(()=>{
              setAns(val);
            },2000);
             return setTimeout(()=>{
              setComp(<Products/>)
             },2000);
          }
          case "contact us": {
             setTimeout(()=>{
              setAns(val);
            },2000);
             return setTimeout(()=>{
              setComp(<ContactUs/>)
             },2000);
          }
          case "resourses" :{
              setTimeout(()=>{
                setAns(val);
              },2000);
               return setTimeout(()=>{
                setComp(<Resourses/>)
               },2000);
          }
          default: {
            
          }
            
        }
      };
      useEffect(()=>{
        if(values_1!==null){
          handleClick(values_1)
        }
      },[values_1])

  return (
    <div>
        {
            values.map((val,i)=>{
              return <Fragment key={i}>
              <button onClick={()=>handleClick(val)}>{val}</button>
              </Fragment>
            })
        }

        {
            state&&<><Answer data={ans}/><Container resp={comp}/></>
        }
    </div>
  )
}

export default KnowMore