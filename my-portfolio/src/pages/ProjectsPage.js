/**
 * This is the Projects page
 * It shows all the projects I done, in school or personal projects
 */
import './App.css';
import './global.css';
import Head from '../components/head.js';
import Foot from '../components/foot.js';


function ProjectsPage() {
    return (
        <div className='app'>
            <section className="background">
                <Head />
                <Foot />
            </section>
        </div>
    );
}

export default ProjectsPage;