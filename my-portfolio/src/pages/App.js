import './App.css';
import './global.css';
import { Box1, Box2 } from '../components/articleBox.js';
import Head from '../components/head.js';
import Foot from '../components/foot.js';


function App() {

  return (
    
    <div className="app">

      <section className="background">
          <Head />
          <div>

            <Box1 />
            <Box2 title="chichi" body="chocho"/>
            <Box2 />

{/* TO-DO: Change to list */}
            {/* <Box1 />
                {boxContent.map((content, index) => (
                    <Box2 key={index} title={content.title} body={content.body} />
                ))} */}

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