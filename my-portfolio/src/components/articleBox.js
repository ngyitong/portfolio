import '../pages/App.css'
import './articleBox.css'
import './displayData.js'
import React from 'react';
import myImage from '../pictures/picOfMe.jpeg';


// Larger top margin size to avoid clashing with header
export function Box1( { title, body, links }) {
    return (
        <div className="article-box1">
            <p className="article-heading">
                {title}
            </p>
            <div className="flex-break"></div>

            <p className="pre-wrap">
                {body}
            </p>
            <div className="flex-break"></div>

            <text className="pre-wrap">
                {links}
            </text>
        </div>
    );

}

/*
List is passed into this function as a props. 
use map function to display each element of a list in a new box
*/
export function Box2( props ) {
    const articles = props.articles;
    return (
        <div>
    {/* ask if the list exists using "?" */}
            {articles?.map((article) =>(
                <div key={article.id} className="article-box2">
                    <p className="article-heading">
                        {article.title}
                    </p>
                    <p className="pre-wrap article-font">
                        {article.body}
                    </p>
                </div>
            ))}
        </div>
    )
}

export function Picture() {
    // TO-DO
    return(
        <div className="article-box1 circular--portrait">
            <img src={myImage} alt="My Profile Pic"></img>
        </div>
    )
}