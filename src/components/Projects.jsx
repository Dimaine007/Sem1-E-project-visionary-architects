import React from 'react';
// import './index.css'; // optional external styling

const projects = [
    { image: '/public/archilagos.jpg', title: 'Skyline Tower', desc: 'Urban high-rise in Lagos' },
    { image: '/public/archiabuja.jpg', title: 'Eco Villa', desc: 'Sustainable villa in Abuja' },
    { image: '/public/archiwork.jpg', title: 'Modern Office', desc: 'Workspace in Victoria Island' },
    { image: '/public/archienugu.jpg', title: 'Zen Garden', desc: 'Relaxation center in Enugu' },
    { image: '/public/archilekki.jpg', title: 'Duplex', desc: 'Residential duplexes in Lekki' },
    { image: '/public/archicomplex.jpg', title: 'White Heights', desc: 'Eco apartment complex' },
];

const Projects = () => (
    <section id="projects" className="section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <img src={project.image} alt={project.title} />
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.desc}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Projects;
