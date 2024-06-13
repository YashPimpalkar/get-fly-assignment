import React, { useState } from "react";
import { NavLink ,Link} from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const [menuOpen,setMenuOpen] =useState(false)

 return (
  
     <nav className="nav nav-container">
       <Link to="/getfly-assignment" className="nav__logo">
         Drives
       </Link>

       <div className="menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
          <span></span>
          <span></span>
          <span></span>
       </div>
       

      
         <ul className={menuOpen ? "open" : ""}>
           <li className="nav__item">
             <NavLink to="/dashboard" className="nav__link">
               DashBoard
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink to="/notification" className="nav__link">
               Notification
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/faqs"
               className="nav__link"
             >
               Faq
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/past-drives"
               className="nav__link"
             >
               Past Drives
             </NavLink>
           </li>
           <li className="nav__item">
             <NavLink
               to="/drive-application"
               className="nav__link"
             >
               Drive Application
             </NavLink>
           </li>
           
           {/* <li className="nav__item">
             <NavLink to="/get-started" className="nav__link nav__cta">
               Get Started
             </NavLink>
           </li> */}
         </ul>
         {/* <div className="nav__close" id="nav-close">
           <IoClose />
         </div> */}
      

       {/* <div className="nav__toggle" id="nav-toggle">
         <IoMenu />
       </div> */}
     </nav>
 
 );
};

export default Navbar;