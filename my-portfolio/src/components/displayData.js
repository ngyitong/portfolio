/* 
For easy edit of static data
Data will be in a list. 
*/

import googleCert from '../pictures/Coursera-Google-cybersec-cert.png';
import brainhackCert from '../pictures/brainhack-2024.png';

export function getExperiences() {
    const experiences = [
    // id is added so that html does not complain when displaying the list
        {
            id: '0',
            title: "My first experience",
            body: "My explanation goes here"
        },
        {
            id: '1',
            title: "My second experience",
            body: "My explanation goes here 2"
        }
    ]
    return experiences;
}


export function getProjects() {
    const projects = [
    // id is added so that html does not complain when displaying the list
        {
            id: '0',
            title: "My first project",
            body: "My explanation goes here",
            imagePath: googleCert
        },
        {
            id: '1',
            title: "My second project",
            body: "My explanation goes here 2",
            imagePath: brainhackCert
        }
    ]

    return projects;
}