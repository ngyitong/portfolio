/**
 * This is the main/home page
 * Displays links to my socials, my education and experiences
 * This main page will link to the projects page.
 */

import './App.css';
import './global.css';
import { Box1, Box2, Picture, BoxWithLine } from '../components/articleBox.js';
import NavBar from '../components/NavBar.js';
import Foot from '../components/foot.js';
import { getHomepageInfo, getEducation, getSkills } from '../components/displayData.js';
// For importing of icons
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


function Home() {
  const homepageInfo = getHomepageInfo();
  const education = getEducation();
  const skills = getSkills();
  
  return (
    
    <div className="app">

      <section className="background">
          <div>
        <NavBar />
            <div className="flex-container-row">
            <Box1 title="Ng Yi Tong" 
              body={
                <div>
                  <p className="article-font">
                    I am a Computer Science student at SMU
                  </p>
                </div>
              }

              links={

                <div>
                  <a
                    className="links-font"
                    href="https://github.com/ngyitong"
                    // prevent new page from using JS to modify or redirect the original page
                    rel="noopener noreferrer"
                    // opens link in a new tab or window
                    target="_blank"
                    >
                    GitHub<DiGithubBadge size={24}/>
                  </a>

                  <a
                    className="links-font"
                    href="https://www.linkedin.com/in/ng-yi-tong/"
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    LinkedIn<FaLinkedin size={24}/>
                  </a>

                  <a
                    className="links-font"
                    href="mailto:yitong.ng.2022@scis.smu.edu.sg"
                    // prevent new page from using JS to modify or redirect the original page
                    rel="noopener noreferrer"
                    // opens link in a new tab or window
                    target="_blank"
                    >
                    Email<MdOutlineEmail size={24}/>
                  </a>
                </div>
              }
              />
              {/* box for picture */}
              <Picture /> 
            </div>

{/* pass a list in for Box2 function to render */}
            <Box2 articles={homepageInfo}/>
            <BoxWithLine title="Education" articles={education}/>
            <BoxWithLine title="Skills" articles={skills}/>

          </div>
          <Foot />
      </section>

    </div>

  );

}

export default Home;
