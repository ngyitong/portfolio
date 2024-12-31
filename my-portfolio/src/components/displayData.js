/* 
For easy edit of static data
Data will be in a list. 
*/

import googleCert from '../pictures/Coursera-Google-cybersec-cert.png';
import brainhackCert from '../pictures/brainhack-2024.png';


/**
 * Data for Home page
 */

export function getHomepageInfo() {
    const HomepageInfo = [
        {
            id: '0',
            title: "About",
            body: "I am a currently a Year 3 student at Singapore Management University, with a strong interest in Cybersecurity. " + 
            "\nI enjoy tackling the challenges of Cybersecurity, and " + 
            "I want to use these knowledge to protect people and organisations online. " 
        },
        {
            id: '1',
            title: "Education",
            body: " <b> testing </b>"
        }
    ]
    return HomepageInfo;
}


/**
 * Data for Experiences page
 */
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

/**
 * Data for projects page
 */
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