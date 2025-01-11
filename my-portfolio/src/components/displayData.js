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
        }
    ]
    return HomepageInfo;
}

export function getEducation() {
/**
 * To return information on my education
 * REMEMBER TO have a space at the end of subTitles for better formatting
 */
    const Education = [
        {
            id: '0',
            subTitle: 'Bachelor in Computer Science, ',
            body: 'Singapore Management University',
            dateStartEnd: '2022-present'
        },
        {
            id: '1',
            subTitle: 'Diploma in Chemical Engineering, ',
            body: 'Temasek Polytechnic',
            dateStartEnd: '2017-2020'
        }
    ]

    return Education;
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
            body: "My explanation goes here 2. "
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
            title: "This protfolio webpage!",
            body: "I created this webpage with the goal of learning more about frontend and ReactJS. " +
                  "I employed external CSS to style each components and for better code reusability. "
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