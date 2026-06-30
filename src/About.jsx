import './About.css'
import myPhoto from "./assets/myPhoto.png";
function About(){
    return(
        <>
        <div className="aboutSection">
            <div className="img">
                <img className ="images"src={myPhoto} alt="not found" />
            </div>
            <div className="name">
                <h1>Name : Siddegowda BK</h1>
            </div>
            <div className="education">
                <p>Education : BE ,6 th sem </p>
            </div>
            <div className="branch">
                <p>
                    Branch : artificial Intellegence and Data-Science
                </p>
            </div>
            <div className="collage">
                <p>Collage : Maharaja Institute of Technology Thandavapura , mysuru</p>
            </div>
            <div className="cgpa">
                <p>CGPA : 8.3</p>
            </div>
            <div className="role">
                Role : Full-Stack Developer
            </div>
            <div className="about-description">
                Hello! I'm Siddegowda BK, a Computer Science Engineering student who enjoys turning ideas into modern web applications. My expertise includes HTML, CSS, JavaScript, React.js, REST API integration, and responsive web design. I believe in continuous learning and regularly build practical projects to strengthen my skills. I'm currently expanding my knowledge in backend development while using AI-powered tools to accelerate learning and improve productivity.
            </div>
            <h2>Skills: </h2> 
            <div className="skills">
                
                <div className="frontEnd">
                
                <h3>Front End skills</h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>JAVASCRIPT</p>
                <p>REACT JS</p>
                </div>
                <div className="backend">
                    
                    <h3>Backend Skills</h3>
                    <h4>AI workFlows :</h4><p>Generative AI - Assisted development ,<br /> Prompt Engineering ,<br />Ai -Driven  debugging and Prototyping</p>
                    <p>Python</p>
                    
                </div>
                <div className="database">
                    DataBase : Mongo DB
                </div>
                
            </div><br />
            <div className="contact">
                <h2>Contact</h2>
                <div className="phNo">
                    PH : 7019783473
                </div>
                <div className="email">
                    <p>Email : siddegowda031@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About