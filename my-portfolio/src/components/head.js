import './head.css';
import '../pages/App.css'
import React from 'react';

const Head = ({ currentPath }) => {
// function Head() {
    return (
        <nav className="head">
            <div className="flex-container-row">
                {/* Things under align-left will be pushed to the left */}
                <h3 className={ "heading-font align-left" }>Ng Yi Tong</h3>
                {/* Things under align-right will be pushed to the right */}
                <a
                    href='/projects'
                    className={ "heading-font align-right ${currentPath} === '/projects' ? 'underline' : ''}" }
                >
                    Projects
                </a>

            </div>
        </nav>
    )
}

export default Head;