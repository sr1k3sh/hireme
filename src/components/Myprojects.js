import React from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import project1 from './../images/project1.png';
import project2 from './../images/shareidea.png';
export default function Myprojects(){
    const projectlist = [
        {
            src:project1,
            title:"Safepass",
            desc:"Sass product to keep your password safe and not to forget ..more",
            link:"https://peaceful-taiga-49919.herokuapp.com/",
            code:"https://github.com/sr1k3sh/safepass",
            stack:['javascript','sass','html','react','mongodb','express','node']
        },
        {
            src:project2,
            title:"ShareIdea",
            desc:"A social media app to show like,share,comment ..more",
            link:"https://shareidea.netlify.app/",
            code:"https://github.com/sr1k3sh/social-app",
            stack:['javascript','sass','html','react','firebase']  
        }
    ]
    return(
        <React.Fragment>
            <section className="container-xl-12 rikesh__column">
                <Header title="My Projects"></Header>
                <div className="myprojects__row">
                    {
                        projectlist.map((p,i)=><ProjectCard 
                            key={i}
                            src={p.src} 
                            title={p.title}
                            desc={p.desc}
                            stack={p.stack}
                            link={p.link}
                            code={p.code}
                        ></ProjectCard>)
                    }
                </div>
            </section>
        </React.Fragment>
    )
}