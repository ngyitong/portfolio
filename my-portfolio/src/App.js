/**
 * Guide for linking to other pages 
 * https://codesandbox.io/p/sandbox/react-router-n46sqp?file=%2Fsrc%2FApp.js%3A3%2C33
 */


import ProjectsPage from './pages/ProjectsPage.js';
import Home from './pages/Home.js';
import ExperiencesPage from './pages/ExperiencesPage.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const guide = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      // { path: "/portfolio", element: <Home />},
      { index: true, element: <Home /> },
      { path: "projects", element: <ProjectsPage />},
      { path: "experiences", element: <ExperiencesPage />}
    ]
  }
], { basename: "/portfolio/" });

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={guide} />
    </div>

  );

}

export default App;
