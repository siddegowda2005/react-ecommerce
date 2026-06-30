import './Nav.css'
// import {Link} from 'react-router-dom'
import { Link } from "react-router-dom";
import Home from './Home.jsx'


function Nav(){


    return(
        <>

          <div className="navItems">
            <li className="navItem"><Link className='link' to='/home'>Home</Link></li>
            <li className="navItem"><Link to='/cart'>Cart</Link></li>
            <li className="navItem"><Link to='/order'>Order</Link></li>
            <li className="navItem"><Link to='/about'>About</Link></li>
          </div>
          {/* <Home/> */}
        </>
    )
}
export default Nav