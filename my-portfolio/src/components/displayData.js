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
            "\nI enjoy tackling challenges in the field and am motivated by the goal of protecting others online. " + 
            "I want to make a meaningful impact for the security our digital world. " 
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
            title: "Coursera Google Cybersecurity Professional Certificate",
            body: "This certificate introduced me to the fundamentals of cybersecurity. " + 
                    "I learnt about the different tools used by cybersecurity professionals to prevent, detect and respond to cyber attacks. " +
                    "This course also taught me how a company can identify, manage and respond to cyberseucity risks. " + 
                    "Additionally, I was given hands on experience with tools such as Wireshark, tcpdump and VirusTotal." + 
                    "My completion of this course has provided me with a better appreciation of the importance of cybersecurity and the motivation to learn more about the different fields in cybersecurity.",
            imagePath: googleCert
        },
        {
            id: '1',
            title: "DSTA Brainhack 2024",
            body: "I participated in the Brainhack cybersecurity hackathon, with a team of 4. ",
            imagePath: brainhackCert
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
            body: "My explanation goes here 2"
        }
    ]

    return projects;
}