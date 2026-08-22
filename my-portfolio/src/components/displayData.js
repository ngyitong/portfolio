/* 
For easy edit of static data
Data will be in a list. 
*/

/**
 * TO RUN ON LOCALHOST FOR TESTING:
 * `npm start .`
 */

/**
 * TO UPDATE THE WEBSITE:
 * 1. After pushing to github on the gh-pages-2 branch
 * 2. Run the command: npm run deploy (else the page will fail to load)
 * DONT HAVE TO TOUCH gh-pages branch
 */

import googleCert from '../pictures/Coursera-Google-cybersec-cert.png';
import brainhackCert from '../pictures/brainhack-2024.png';
import cs440ProjectPic2 from "../pictures/cs440-project-pic2.png";
import cs302pic from "../pictures/cs302-microservice.png";
import whitehatcert from "../pictures/whitehat-hacking-fundamentals-cert.png"
import internship_pic from "../pictures/internship_pic.png"



/**
 * Data for Home page
 */

export function getHomepageInfo() {
    const HomepageInfo = [
        {
            id: '0',
            title: "About",
            body: "I am a currently a Final student at Singapore Management University, with a strong interest in Cybersecurity. " + 
            "\nI enjoy tackling challenges in the field and am motivated by the goal of protecting others online. " + 
            "I want to make a meaningful impact for the security of our digital world. " 
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

export function getSkills() {
    /**
     * To return information on my techinical skills
     */
    const Skills = [
        {
            id: '0',
            subTitle: 'Programming Languages: ',
            body: "C, Java, Python, SQL"
        },
        {
            id: '1',
            subTitle: 'Frameworks: ',
            body: "Spring boot, FastAPI, React"
        },
        {
            id: '2',
            subTitle: 'Tools: ',
            body: "Github, Docker, Wireshark, Kali Linux"
        }
    ]

    return Skills;
}


/**
 * Data for Experiences page
 */
export function getExperiences() {
    const experiences = [
    // id is added so that html does not complain when displaying the list
        {
            id: '3',
            title: "Student Internship at Singhealth Health Services Research Centre",
            body: "During my six month research internship at the SingHealth Health Services Research Centre (HSRC)," +
                    " I supported a major clinical grant initiative aimed at improving the Chain of Survival for " +
                    "Out-of-Hospital Cardiac Arrest (OHCA) patients. Working under the guidance of Deputy Director Lam Shao Wei Sean, " +
                    "my work specifically focused on addressing the future projected distribution of OHCA incidence, " +
                    "to evaluate the feasibility of AED-equipped first responders. \n\nTo ensure methodological integrity, " +
                    "I conducted literature reviews to learn from existing research, followed best practices and proven research methodologies that best fits Singapore’s geography and demography. " +
                    "On the technical front, I engineered data-processing pipelines using Python scripts and SQL queries to clean and integrate massive, " +
                    "unstructured healthcare datasets with spatial demographics from public sources. Utilising tools like QGIS, " +
                    "I transformed geospatial data into structured data and combined it with healthcare data. " +
                    "Accounting for crucial demographic shifts such as Singapore's aging population and the development of new residential communities, " +
                    "I trained a prediction model to project OHCA hotspots across Singapore through 2040.",
            imagePath: internship_pic
        },
        {
            id: '2',
            title: "Coursera Google Cybersecurity Professional Certificate",
            body: "This certificate introduced me to the fundamentals of cybersecurity. " + 
                    "I learnt about the different tools used by cybersecurity professionals to prevent, detect and respond to cyber attacks. " +
                    "I was introduced to SIEM tools such as Splunk and Chronicle, and learnt the theory behind IDS/IPS, Firewalls and access control. " +
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
                  "espcially in network security and linux commands. ",
            imagePath: brainhackCert
        },
        {
            id: '0',
            title: "Whitehat Cybersecurity Capture the Flag",
            body: "I attended a cybersecurity Capture the Flag event organised by a club in my university. " +
                  "Where I was introduced to numerous tools and techniques, such as Kali Linux, Linux commands, OSINT, Cryptography and Web Exploitation." +
                  "Over the course of 5 weeks, we were also given challenges to solve, which reinforced the techinical skills that I had learnt. " + 
                  "This introductory CTF was a lot of fun and I was placed top 20 in the competition. ",
            imagePath: whitehatcert
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
        },
        {
            id: '2',
            title: "IT Solution Lifecycle Management (University Project)",
            body: "I collaborated with a team of 5 to using GitLabs create a microservice application that keeps track of brand instruments. " +
                  "This university project provided me with hands-on experience in planning and developing a microservice application. " +
                  "I learnt and employed DevOps practices such as CI/CD, Docker and Infrastructure as Code. " +
                  "I was responsible for developing and writing unit tests for the microservice that kept track of the brand instruments. " +
                  "The backend services were with AWS Lambda and I also helped develop the landing page for the application. " + 
                  "This project was vital in my understanding of microservice architecture and DevOps practices. ",
            imagePath: cs302pic
        }
    ]

    return projects;
}