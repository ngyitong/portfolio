/**
 * This is the Experience page
 * It shows all the certifications and experiences I have
 */

import './App.css';
import './global.css';
import NavBar from '../components/NavBar.js';
import { BoxWithImage } from '../components/articleBox.js';
import Foot from '../components/foot.js';
import { getExperiences } from '../components/displayData.js';

function ExperiencesPage() {
    const experiences = getExperiences();
    return (
        <div className='app'>
            <section className='background'>
                <NavBar />
                    <p className='page-title-font'>
                        My Computer Science Experiences and Certifications
                    </p>

                    <BoxWithImage articles={experiences} />


                <Foot />
            </section>
        </div>
    )
}

export default ExperiencesPage;