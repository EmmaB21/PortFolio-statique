// import { useState, useEffect } from 'react';
// import { fetchInfo } from '../../service/API';
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import data from '../../data/projects.json'

const Projects = () => {

    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //   // Effectue une requête GET 
    //   fetch(fetchInfo.projects)
    //     .then(response => response.json())
    //     .then(data => 
    //         setProjects(data))
    //     .catch(error => console.error('Erreur lors du chargement des projets', error));
    // }, []); 
    // console.log("Project Data:", projects);
    return (
        <section className="projects" id="Projects">
            <h2 className='projects__title'>Mes réalisations</h2>
            <div className="projects-container">
                {data.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;