import React from "react";

export default function ToolCard(props){

    return(
        <React.Fragment>
            <div className="toolcard">
                <img className="toolcard__img" src={props.src} alt={props.alt}></img>
                <span className="toolcard__span">{props.title}</span>
            </div>
        </React.Fragment>
    )
}