import './App.css';
import './global.css';
import { Box1, Box2 } from '../components/articleBox.js';
import Head from '../components/head.js';
import Foot from '../components/foot.js';
import { getExperiences } from '../components/displayData.js';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa6";


function App() {
  const experiences = getExperiences();
  
  return (
    
    <div className="app">

      <section className="background">
          <Head />
          <div>
            <div className="flex-container-row">
            <Box1 title="Ng Yi Tong" body={
                // <div>
                //   <text className="article-font">
                //     I am a Computer Science student at SMU
                //   </text>
                // </div>
                <>
{/* 
                  Links to socials 
*/}
                  <a
                    className="links-font"
                    href="https://github.com/PlacidPlaty"
                    // prevent new page from using JS to modify or redirect the original page
                    rel="noopener noreferrer"
                    // opens link in a new tab or window
                    target="_blank"
                    >
                    GitHub <DiGithubBadge size={24}/>
                  </a>

                  <a
                    className="links-font"
                    href="https://www.linkedin.com/in/ng-yi-tong/"
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                    LinkedIn <FaLinkedin size={24}/>
                  </a>
                </>}
              />
              <Box1 />
            </div>

{/* pass a list in for Box2 function to render */}
            <Box2 articles={experiences}/>

          </div>
          <Foot />
      </section>

    </div>

  );
}

export default App;

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