import './head.css';
import '../pages/App.css'
import React from 'react';

function Head(){
    return (
        <header className="head">
            <div className="flex-container-row">
                {/* Things under align-left will be pushed to the left */}
                <h3 className={ "heading-font align-left" }>Ng Yi Tong</h3>
                {/* Things under align-right will be pushed to the right */}
                <h3 className={ "heading-font align-right" }>Projects</h3>


            </div>
        </header>
    )
}

export default Head;