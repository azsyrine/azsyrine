import './Header.css'
import React  from "react";

import {NavItem} from '../../Components/Index'
import {Link} from "react-router-dom";


const Header = () => {
  return(
     <>
     <div className="container1 navbar navbar-expand-md text-white fixed-top">
      <div className="container">
          <div className="navbar-brand">Import / Export<img src="" alt=''/></div>
          
          <div className="collapse navbar-collapse" id="mainmenu">
              <ul className="navbar-nav ms-auto">
                 <NavItem className='NavItem'>
                  <Link to="/home" className="nav-link">Home</Link>
                  </NavItem >
                 <NavItem  className='NavItem'>
                  <Link to="/#" className="nav-link">Features</Link>
                  </NavItem >
                  <NavItem  className="nav-item dropdown">
                      <Link to="/#" className="nav-link dropdown-toggle">About Us</Link>
                      
                  </NavItem >
                  <NavItem  className='NavItem'>
                  <Link to="/signup" className="nav-link">SignUp</Link>
                  </NavItem >
                  <NavItem  className='NavItem'>
                  <Link to="/login" className="nav-link">Log In</Link>
                  </NavItem >
                 <NavItem  className='NavItem'>
                  <Link to="/contactus" className="nav-link">Contact Us</Link>
                  </NavItem >
                  <NavItem  className='NavItem'>
                  <Link to="/fournisseur" className="nav-link">Devenir Fournisseur</Link>
                  </NavItem >
                  <NavItem  className='NavItem'>
                  <Link to="/partenaire" className="nav-link">Devenir Partenaire</Link>
                  </NavItem >
                  <NavItem  className='NavItem'>
                  <Link to="/#" className="nav-link">LogOut</Link>
                  </NavItem >
                  
              </ul>
          </div>
     </div>
</div>
    
     
     </>
  );
}

export default Header