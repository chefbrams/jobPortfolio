import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" id="name" href="#">Allan Bramley</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={ faBars } style={{ color: "white"}} />
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" id="home" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="about" href="#">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="experience" href="#">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="port" href="#">Portfolio</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" id="port" href="#">Skills</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" id="port" href="#">Contact Me</a>
          </li>
         
           
          
          
        </ul>
       
      </div>
    </nav>
    );
}
export default Navbar;