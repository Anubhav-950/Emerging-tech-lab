import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  Button,
  Icon,
  MenuList,
} from "@chakra-ui/react"
import './Navstyle.css'


const Navbar = ()=>{
  
    return(
        <nav className="navbar">
      <h2>MediLine</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/appointment">Appointment</Link>
      </div>
      <div>
              <span><Link to="/login"></Link> </span>
      </div>
    </nav>
    )
}
export default Navbar;


{/* <div className="SUL">
          <Button className="bSignUp">
            <span className='span' style={{
              padding: "10%", textDecoration: "none",
            }}>
              <Link to='/SignUp' target="_blank">
              Sign Up
            </Link>
            </span>
            </Button>
          <Button className="bLogin">
            <span className='span' style={{
              textDecoration: "none",}}>
              <Link to='/login' target="_blank">
            Login
            </Link>
            </span>
            </Button>
          </div> */}