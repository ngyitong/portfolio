import './NavBar.css';
import '../pages/App.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";


function NavBar() {
    return (
        
        <div className="head">
            <div className="flex-container-row">

                {/* Things under align-left will be pushed to the left */}
                <Link to='/' className=" heading-font align-left ">
                        Home
                </Link>
                {/* Things under align-right will be pushed to the right */}
                <Link to='/projects' className=" heading-font align-right ">
                        Projects
                </Link>

                <Outlet />
            </div>
        </div>

    );
}

export default NavBar;