import './App.css';
import './global.css';

function App() {
  return (
    
    <div className="app">
    
      <div className="background">
        <header className="header">
          <div className="flex-container-row">
            <h3 className={ "heading-font align-left" }>Ng Yi Tong</h3> 
            <h3 className={ "heading-font align-right" }>Projects</h3>
            <h3 className={ "heading-font" }>Projects2</h3>
            <h3 className={ "heading-font" }>Projects3 </h3>
          </div>
        </header>

      </div>
        <div className="footer">
          <div className="flex-container-row"> 
            <div className="heading-font">My links</div>
            <div className="flex-break"></div>
            <a 
              className="links-font"
              href="https://github.com/PlacidPlaty"
              // prevent new page from using JS to modify or redirect the original page
              rel="noopener noreferrer"
              // opens link in a new tab or window
              target="_blank"
            >
              GitHub
            </a>

            <a 
              className="links-font"
              href="https://www.linkedin.com/in/ng-yi-tong/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>

            <div className="flex-break"></div>

{/* Credits for background */}
            <div className="small-font">
              Background photo by
                <a className="app-link small-font"
                  href="https://unsplash.com/@sametomorrow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Adam Chang
                </a>

              on
              <a className="app-link small-font"
                  href="https://unsplash.com/photos/snow-field-and-green-pine-trees-during-daytime-IWenq-4JHqo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Unsplash
                </a>
              
            </div>
          </div>

        </div>

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