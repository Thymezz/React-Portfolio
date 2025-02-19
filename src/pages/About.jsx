import React from 'react';
import './About.css'; // Make sure to create a corresponding CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            <img src="https://via.placeholder.com/150/0000FF/808080?text=Person" alt="Person" className="about-image" />
            <p>
                Hello! I am a passionate developer with experience in building web applications using modern technologies.
                I enjoy solving complex problems and continuously learning new skills to improve my craft.
            </p>
        </div>
    );
};

export default About;
