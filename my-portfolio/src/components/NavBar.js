import './NavBar.css';
import '../pages/App.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";


function NavBar() {
    return (
        
        <div className="head">
            <div className="flex-container-row">

                {/* Things under align-left will be pushed to the left */}
                <Link to='/portfolio' className=" navbar-font align-left ">
                    Home
                </Link>
                {/* Things under align-right will be pushed to the right */}
                <Link to='/experiences' className=' navbar-font align-right'>
                    Experiences
                </Link>
                <Link to='/projects' className=" navbar-font ">
                    Projects
                </Link>

                <Outlet />
            </div>
        </div>

    );
}

export default NavBar;