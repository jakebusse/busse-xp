import '../../assets/styles/Content.css';
import Icon from '../Icon';
import briefcase from '../../assets/icons/briefcase.png';
import resume from '../../content/jake-busse-resume.pdf#view=FitW';
import portrait from '../../content/portrait.jpeg';

function Content({ file }) {
    console.log(file);
    if(file === 'System Information') {
        return (
            <div>
                <h1 className="content-center">Busse XP</h1>
                <p className="content-center">This website was created by Jake Busse under a Creative Commons license.</p>
                <hr className="content-separator" />
                <div class="content-container">
                    <p>
                        The intention of this website was to serve as a unique way of presenting an online portfolio in an interactive way. 
                        While this format may be entertaining to explore, if you would like to view this same information in a more concise manner please visit <a href="https://www.jakebusse.net" target="_blank" rel="noreferrer">www.jakebusse.net</a>
                    </p>
                    <hr className="content-separator" />
                    <h2 className="content-center">Specs</h2>
                    <p>Developed with: <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a></p>
                    <p>Icons provided by: <a href="https://archive.org/details/WindowsXPExtractedIcons" target="_blank" rel="noreferrer">archive.org</a></p>
                    <hr className="content-separator" />
                    <p className="content-center">View this project on <a href="https://github.com/jakebusse/portfolio-xp" target="_blank" rel="noreferrer">GitHub</a></p>
                </div>
            </div>
        );
    } else if(file === "About Me") {
        return (
            <div>
                <h2 className="content-center">Hi, I'm Jake.</h2>
                <div className="content-container-flex">
                    <img className="content-portrait" src={portrait} alt="profile" draggable={false} />
                    <div className="content-bio">
                        <h3>I'm so glad you stopped by!</h3>
                        <p>I am a...</p>
                        <ul>
                            <li>Student</li>
                            <li>Intern</li>
                            <li>Aspiring Web Developer</li>
                            <li>Hard-Worker</li>
                            <li>Fast Learner</li>
                            <li>Driven Individual</li>
                        </ul>
                        <hr className="content-separator" />
                        <p>I am currently a second-year computer science student at the University of Minnesota - Twin Cities pursuing both a BA in Computer Science and a minor in Spanish Studies.</p>
                        <p>I have honed in my skills around web development and enterprise technologies through passion projects, formal education, and internship/volunteer experiences. Examples of these projects and experiences can be seen on this website, though there are admittedly far too many small projects to count them all.</p>
                    </div>
                </div>
            </div>
        );
    } else if(file === "Projects") {
        return (
            <div>
                <Icon icon={briefcase} modal={false} name="Test" />
            </div>
        );
    } else if(file === "Resume") {
        return (
            <div>
                <embed src={resume} className="content-resume" />
            </div>
        );
    }
}

export default Content;