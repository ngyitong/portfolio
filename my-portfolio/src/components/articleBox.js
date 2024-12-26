import '../pages/App.css'
import './articleBox.css'
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
        <div className="article-box2">
            <p className="bold-text">
                {/* something */}
                {title}
            </p>
            
            <p className="pre-warp">
                {/* <text>
                    something else a very very long sentence that would hopefully fill up the box so that i can test what the result would be. But seems like this is still no long enough so i would lengthen it even more. Just a little more, but I am running out of things to type.

                </text> */}

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