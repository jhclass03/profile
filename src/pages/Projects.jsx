import { projects } from "../contents/textdata";

function projects(){
    return(
        <section id="projects">
            <h2 id="project-title">PROJECTS</h2>
            <div className="projects-wrap">
                {
                    projects.map((projects,index)=>(
                        <article className={`projects-item ps{index+1}`} key={index}>
                            <h3 className="title">{projects.title}</h3>
                            <p className="data">{projects.date}</p>
                            <p className="sub">{projects.sub}</p>
                            <p className="desc">{projects.desc[0]}</p>
                            <p className="desc">{projects.desc[1]}</p>
                            <p className="type">{projects.type}</p>
                            <a href={projects.code} target="_black" className="code">CODE</a>
                            <a href={projects.demo} target="_black" className="code">DEMO</a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

export default projects;