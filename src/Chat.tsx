import "./Chatbot.sass"
import"./components/Style.scss"
import { HiPaperAirplane } from "react-icons/hi2";
import ChatBot from './components/ChatBot';
import { useState } from "react";
const MyComponent: React.FC = () => {
  let [state,setState]=useState<string>("");
  let [val,setVal]=useState<null|string>(null);

  let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // let {name,value}=e.target;
    setState(e.target.value);
    console.log(state);
  }
  
  let handleClick=()=>{
      setVal(state);
 }
    return (
      <main>
        <section id="container">
          <header id="head">
            <div id="img"></div>
            <div id="h5">
              <h5>Active...</h5>
            </div>
          </header>
          <div id="chatbot-container">
            <div id="inner-chatbot">
            <ChatBot search={val}/>
            </div>
            
          </div>
          <footer id="footer">
            <div id="text">
            <input type="text" placeholder="enter text....." value={state} onChange={handleChange}/>
            <span id="icon" onClick={handleClick}>
              <HiPaperAirplane/>
              </span>
            </div>
          </footer>
        </section>
      </main>
    );
  }
export default   MyComponent;