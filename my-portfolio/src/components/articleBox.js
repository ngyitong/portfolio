import '../pages/App.css'
import './articleBox.css'
import React from 'react';


// Larger top margin size to avoid clashing with header
export function Box1( { title, body }) {
    return (
        <div className="article-box1">
            <p className="article-heading">
                {title}
            </p>
            <div className="flex-break"></div>
            <p className="pre-wrap links-font">
                {body}
            </p>
        </div>
    );

}

// Small margin sizes
export function Box2( { title, body } ) {
    return (
        <div className="article-box2">
            <p className="article-heading">
                {title}
            </p>
            
            <p className="pre-wrap article-font">
                {body}
            </p>

        </div>
    );
}

export function Picture( {pathToPic} ) {
    // TO-DO
}