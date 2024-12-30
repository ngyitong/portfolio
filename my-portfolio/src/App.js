/**
 * Guide for linking to other pages 
 * https://codesandbox.io/p/sandbox/react-router-n46sqp?file=%2Fsrc%2FApp.js%3A3%2C33
 */


import NavBar from './components/NavBar.js';
import ProjectsPage from './pages/ProjectsPage.js';
import Home from './pages/Home.js';
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";


const guide = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: "/", element: <Home />},
      { path: "/projects", element: <ProjectsPage />}
    ]
  }
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={guide} />
    </div>

  );

}

export default App;
