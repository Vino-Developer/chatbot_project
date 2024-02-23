// import { RiRobot2Fill } from "react-icons/ri";
import './start.scss';
import { Link } from "react-router-dom"; 
import Button from "@mui/material/Button"; 
//import { useState } from "react";

const GetStarted = () => {
  //let [chat,setChat]=useState(false);
  return (
    <div className="start">
        <div className="portal">
          <div id="fireflink-logo">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAABOCAMAAAAejDH9AAAABlBMVEX///9DR60wQeZwAAAD7klEQVR4nO2ZyXLjQAxDrf//6VQlh1hqAAS1NBM3cbS4PBAZxal5vX60/ejVKtH2q2qUJbXtVE2znrajqoFW0xBARzBV4P4dwUzhADqCWWL37wQmiQfQCUxR379Wff5i9fmL1ecvVp+/WH3+YpkBdDJPybp//+N4Tk4A/X56UEYA/SviSYUB9C/phxXcd/gl3RHcLHldcH43AtL6NgFMlPXucHd//F/hCjBRurHK7yfKaWRyXgA22DYrAP6jqksHjrM+Zwew22jUxfsvBkBPJQMYMbhL/x5zAtjM4bMCYD/YKgBNMZBoEzqCuBWMchcaVcYkNPnZAAzQTAAygrgRDHL3GUXGIDA4FQB5tfAAYDex6AUgIojbYhi6zSgyBoHBuQDwuyWZHh3pBUATiLvAFHebUWPMGedmA4AvF/ZJ3DmQaBM2POkBM9xdRo0xZ5ybDgD9HJNPcJ8dgLJkwquIRBNaFQ/nXxgTiHJxRHT4hJ4Mzzs+I9sFfsq//9XNHT4tAEq0/4QfDI47PGPFij/l3//jxR3+pwOgoPiZKucGUv6DV4th15meRpSA+0eBF3EsNG33TBhTBlL+/3UAx1c8aFa3AsPenwXWuIOU/wsBMBAJZyJKwP1Dt3RcpR4nvmLm3d30O4CBSDgTUQLuF9ilqQDiw/E+tv+3GLTjgbqVgMT7bwxgy2R1NYBzc0ExaIcDg1YCEu+/MwA9HfGdDSDYensAKXPvIPH+mgCuvYLCrfcFcMrcNjGA6MIhYT4Aw1MHYDCeDcCw9HQAxvB5AQRveYMxFYAyNCsAZ/jEAPT3EceHH4Cyg7vi8hz0bksMPCUA+Y3cc+IFoGaxprg+CU3+MigNAG4574WRyFGMPnSXDSA3/Pm/hCkx9MLvLGzGR7nibqkAhkoMCkjUSdwD+CdyN+X2PxkAQGYAxA13GV5E2L8ewLg+NXxaAOOJnGbeT00gMfPejRxoss7AMjjDIQYgGMNLo7ojqwTkvjgq90+b8EKDywANhziA9ISgNKo7skpAff7bAsCHNMgM1HCIBWgcVhYieAOQHh40G/55E9yqyP5yAKgSwceA/PCg2fAvmgJzDM6gDYd4gDEj3QkoLEB6ddxs+FdNuo7hGbzhEBMw4QUkgOA1ILHD3Rn+VRNYTsjeawzicIgJmCodtiB4CUjcCHeGf9k0rsdktMQAgENcwP2ToPS4BsELQOJFurN77tTsAF526ZUALp2kBZUIoArxs+UHUEX44XIDqOL7eHkBVNEtICuAKrgVZARQhbaGwgCqwFZRFEAV1zLSAVRRLSQVQBXTUhIBtKaoAyhWB1CtDqBYHUC1OoBqdQD16vvX6Au1IyR05Iy1swAAAABJRU5ErkJggg==" alt="fireflink" />
           
          </div>
         
              <div id="logo">
              <p>Hii!!..let's get started!!</p>
              <img src="https://www.bacancytechnology.com/blog/wp-content/uploads/2019/08/ezgif.com-optimize-5.gif"></img>
              </div>
              
         
          <div className='startbutton'>
          <Link to='/chatbot' >
            <Button color="info" size="medium"
                    variant="contained">Start Chat</Button> 
          </Link>
          </div>
        </div>

    </div>
  )
}

export default GetStarted