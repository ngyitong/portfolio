/* 
For easy edit of static data
Data will be in a list. 
*/

import googleCert from '../pictures/Coursera-Google-cybersec-cert.png';
import brainhackCert from '../pictures/brainhack-2024.png';
// import cs440ProjectPic1 from "../pictures/cs440-project-pic1.jpeg";
import cs440ProjectPic2 from "../pictures/cs440-project-pic2.png";



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
                    "Additionally, I was given hands on experience with tools such as Wireshark, tcpdump and VirusTotal. " + 
                    "My completion of this course has provided me with a better appreciation of the importance of cybersecurity and the motivation to learn more about the different fields in cybersecurity. ",
            imagePath: googleCert
        },
        {
            id: '1',
            title: "DSTA Brainhack 2024",
            body: "I participated in the Brainhack cybersecurity hackathon with a team of 4. " +
                  "This hackathon presented numerous challenges which helped me to develop my techinical skills, " + 
                  "espcially in network security and linux commands.",
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
            title: "This portfolio page!",
            body: "I created this webpage with the goal of learning more about frontend and ReactJS. " +
                  "I employed external CSS to style each components for better code reusability. "
        },
        {
            id: '1',
            title: "Implementation of Ransomware (University Project) ",
            body: "This project was part of my university course work. Collaborating with a team of 4, we created a ransomware that is deployed via Raspberry Pi Pico. " + 
                  "Raspberry Pi Pico acted as an external keyboard, when inserted into a Windows device, " + 
                  "would automatically download our ransomware code and execute it. " +
                  "\n\nA hardware-based attack was choosen as allows us to bypass the security measures that are in place in browsers. " +
                  "Our ransomware code was written in Python, which is able to look for specific file types and encrypt them. " +
                  "After encrypting the files, a popup would appear on the screen, demanding a ransom from the user. " + 
                  "Using webhook, it would send the decryption key to our server via hybrid encryption. " + 
                  "Through this project, I was able to gain a better understanding of how ransomware works through the perspective of an attacker. ",
            imagePath: cs440ProjectPic2
        }
    ]

    return projects;
}