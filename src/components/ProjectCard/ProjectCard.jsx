// import { baseURL } from "../../service/API"

function ProjectCard({ project }) {
    return (
        <article className="projectCard">
            <div className="cover" style={{ backgroundImage: `url(${project.image})` }}>
                <h2 className="card-title">{project.nom}</h2>
                <span className="technos">{project.technos}</span>
                <div className="card-back">
                    <p>{project.description}</p>
                    <div className="card-links">
                        {project.liens.map((lien, index) => (
                            <a key={index} href={lien[Object.keys(lien)[0]]}>
                                {Object.keys(lien)[0]}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard