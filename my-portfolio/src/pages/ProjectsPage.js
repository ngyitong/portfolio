/**
 * This is the Projects page
 * It shows all the projects I done, in school or personal projects
 */
import './App.css';
import './global.css';
import NavBar from '../components/NavBar.js';
import { BoxWithImage } from '../components/articleBox.js';
import Foot from '../components/foot.js';
import { getProjects } from '../components/displayData.js';


function ProjectsPage() {
    const projects = getProjects();
    return (
        <div className='app'>
            <section className="background">
                <NavBar />
                <p className="page-title-font">
                    Projects
                </p>
                <div className="flex-container-row">
                    <BoxWithImage articles={projects}/>

                </div>
                <Foot />
            </section>
        </div>
    );
}

export default ProjectsPage;