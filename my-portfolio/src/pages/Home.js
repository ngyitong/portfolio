/**
 * This is the main/home page
 * Displays links to my socials, my education and experiences
 * This main page will link to the projects page.
 */

import './App.css';
import './global.css';
import { Box1, Box2, Picture } from '../components/articleBox.js';
import Head from '../components/NavBar.js';
import Foot from '../components/foot.js';
import { getExperiences } from '../components/displayData.js';
// For importing of icons
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


function Home() {
  const experiences = getExperiences();
  
  return (
    
    <div className="app">

      <section className="background">
          <div>
            <div className="flex-container-row">
            <Box1 title="Ng Yi Tong" 
              body={
                <div>
                  <p className="article-font">
                    Computer Science student at SMU
                  </p>
                </div>
              }

              links={

                <div>
                  <a
                    className="links-font"
                    href="https://github.com/PlacidPlaty"
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
            <Box2 articles={experiences}/>
            <Box2 articles={experiences}/>
            <Box2 articles={experiences}/>

          </div>
          <Foot />
          <Head />
      </section>

    </div>

  );

  // return (
  //   <div className='app'>
  //       <section className="background">
  //           <Head />
  //           <Foot />
  //       </section>
  //   </div>
  // );

}

export default Home;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload?
//     </p>

//     {/* create a hyperlink */}
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>