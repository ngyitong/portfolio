import '../pages/App.css'
import React from 'react';


// Larger top margin size to avoid clashing with header
export function Box1() {
    return (
        <div className="article-box1">
            <h4>Box1</h4>
            <p>
                something something
            </p>
        </div>
    );

}

// Small margin sizes
export function Box2( { title, body } ) {
    return (
        <div className="article-box2 flex-container-row">
            <h4>{title}</h4>
            <div className="flex-break"></div>
            <p>
                {body}
            </p>
        </div>
    );

}

// function Input({ title, body }) {
//     return (
//         <p> 
//             <h4>{title}</h4>
//             {body}
//         </p>
//     )
// }