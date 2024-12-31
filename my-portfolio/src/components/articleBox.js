import '../pages/App.css'
import './articleBox.css'
import './displayData.js'
import React, { useCallback, useState } from 'react';
import myImage from '../pictures/picOfMe.jpeg';
// for zoomable images
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import "react-medium-image-zoom/dist/styles.css";


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

// Displays profile picture
export function Picture() {
    return(
        <div className="article-box1 circular--portrait">
            <img src={myImage} alt="My Profile Pic"></img>
        </div>
    )
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

export function BoxWithLine( { title, articles } ) {

    return(
        <div>
            <div className=" article-box2 ">
                <p className=" article-heading ">
                    {title}
                </p>
                {articles?.map((article) =>(
                    <div key={article.id}>
                        <p className=" pre-wrap article-font line-above-text">
                            <span className="bold-text"> {article.subTitle}</span>
                            {article.body}
                            <span className="move-text-right">{article.dateStartEnd}</span>
                        </p>
                    </div>
                ))}

                {/* <p className=" pre-wrap article-font line-above-text">
                    <span className="bold-text"> aomething </span> another
                </p> */}
            </div>
        </div>
    );
}


/**
 * Isolates the state for each project, 
 * so that the zoom effect does not affect multiple images simultaneously.
 */
function SingleBoxWithImage( { article } ){
    const [isZoomed, setIsZoomed] = useState(false);

    // set isZoomed to true
    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    },[]);

    return(
        <div>
            <p className="article-heading">
                {article.title}
            </p>
            <p className="pre-wrap article-font">
                {article.body}
            </p>

            <div className="rectangular-picture">
                <ControlledZoom 
                isZoomed = {isZoomed}
                onZoomChange={handleZoomChange}
                >
                    <img src={article.imagePath} alt={"not available :("} />
                </ControlledZoom>

            </div>
        </div>

    ); 
}

/**
 * maps the list of projects in displayData.js
 * into SingleProjectBox that renders the data in.
 */
export function BoxWithImage( props ) {

    const articles = props.articles;

    return (
        <div>
            {articles?.map((article) => (
                <div key={article.id} className=" project-box ">
                    <SingleBoxWithImage article={article} />

                </div>
            ))}

        </div>
    );

}

