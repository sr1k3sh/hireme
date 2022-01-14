import React from "react";

export default function ProjectCard(props){
    return(
        <React.Fragment>
            <article className="projectcard">
                <figure>
                    <img className="projectcard__img" src={props.src} alt={props.alt}></img>
                </figure>
                <footer className="projectcard__footer">
                    <div className="projectcard__desc">
                        <h4>{props.title}</h4>
                        <p>{props.desc}</p>
                        <ul className="projectcard__list">
                            {
                                props.stack?.map((s,i)=><li key={i} className="projectcard__stack">{s}</li>)
                            }
                        </ul> 
                    </div>
                    <div className="projectcard__buttons">
                        <button className="btn btn-primary">Details</button>
                        <button className="btn btn-outline-primary">See code</button>
                    </div>
                </footer>
            </article>
        </React.Fragment>
    )
}