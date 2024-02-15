import React, { Fragment, useState } from "react"
import Products from "./items/Products";
import ContactUs from "./items/ContactUs";
import Resourses from "./items/Resourses";
import Container from "./items/Container";
import Answer from "../Answer";

const KnowMore = () => {
    let values=["Products","Contact Us","Resourses"];
    let[state,setState]=useState<boolean>(false);
    let [ans,setAns]=useState<string|null>(null);
    let [comp,setComp]=useState<React.ReactNode|string>("");
    
    let handleClick = (val: string) => {
        setState(true);
        switch (val) {
          
          case "Products": {
            setAns(val);
             return setComp(<Products/>);
          }
          case "Contact Us": {
            setAns(val);
             return setComp(<ContactUs/>)
          }
          case "Resourses" :{
            setAns(val);
              return setComp(<Resourses/>)
          }
          default: {
            
          }
            
        }
      };

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