import '../pages/App.css'
import './articleBox.css'
import './displayData.js'
import React, { useCallback, useState } from 'react';
import myImage from '../pictures/picOfMe.jpeg';
import cert from '../pictures/Coursera-Google-cybersec-cert.png';
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


export function ProjectBox( props ) {

    const [isZoomed, setIsZoomed] = useState(false);

    // set isZoomed to true
    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    },[])

    const projects = props.projects;

    return (
        <div>
            {projects?.map((project) => (
                <div key={project.id} className=" project-box ">
                    <p className="article-heading">
                        {project.title}
                    </p>
                    <p className="pre-wrap article-font">
                        {project.body}
                    </p>

                    <div className="rectangular-picture">
                        <ControlledZoom 
                        isZoomed = {isZoomed}
                        onZoomChange={handleZoomChange}
                        >
                            <img src={project.imagePath} />
                        </ControlledZoom>

                    </div>
                </div>
            ))}

        </div>
    );

    // return (
    //     <div className=" project-box ">
    //         <p className="article-heading">
    //             something
    //         </p>
    //         <p className="pre-wrap article-font">
    //             project body
    //             something else
    //         </p>
    //         {/* <div className="rectangular-picture">
    //             <img src={cert} alt="My cert"></img>
    //         </div> */}
    //         <div className="rectangular-picture">
    //             <ControlledZoom 
    //             isZoomed = {isZoomed}
    //             onZoomChange={handleZoomChange}
    //             >
    //                 <img src={cert} />
    //             </ControlledZoom>

    //         </div>

    //     </div>
    // );
}

