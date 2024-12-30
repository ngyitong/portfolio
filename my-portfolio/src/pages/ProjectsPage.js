/**
 * This is the Projects page
 * It shows all the projects I done, in school or personal projects
 */
import './App.css';
import './global.css';
import NavBar from '../components/NavBar.js';
import { Box1, Box2, ProjectBox } from '../components/articleBox.js'
import Foot from '../components/foot.js';


function ProjectsPage() {
    return (
        <div className='app'>
            <section className="background">
                <NavBar />
                    <div className="flex-container-row">
                        <ProjectBox />

                    </div>
                <Foot />
            </section>
        </div>
    );
}

export default ProjectsPage;