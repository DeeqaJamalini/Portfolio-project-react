import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
    <Sidebar/>
      <div className= "wrapper">
      <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{dutation: 0.5}}>Deeqa Jama</motion.span>
      <div className="social">
      <a href="#"><img src="/public/icons8-github-48.png" alt="github-icon"/></a>
      <a href="#"><img src="/public/317750_linkedin_icon (2).png" alt="linkedin-icon"/></a>

      </div>
      </div>
    </div>
  )
}

export default Navbar;