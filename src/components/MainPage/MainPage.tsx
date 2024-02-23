
import { Link } from 'react-router-dom';
import './Main.scss'
import { RiMessage2Fill } from "react-icons/ri";
const MainPage = () => {
  return (
    <div className="MainPage">
        <div className="innerMain">
         <Link to='/GetStarted' className='link' > <RiMessage2Fill/></Link>
          
        </div>
    </div>
  )
}

export default MainPage