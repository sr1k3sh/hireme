import React, { useEffect, useRef } from "react";
import { iteraction } from "../utils";

export default function ServiceRow(props){
    const serviceRef = useRef();
    
    useEffect(()=>{
        iteraction(serviceRef.current);
    },[])
    return(
        <React.Fragment>
            <article ref={serviceRef} className={props.alternate?"service-row service-row--reverse":"service-row"}>
                <div className="service-row__text-wrapper">
                    <h3 className="rikesh__h3">{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
                <div className="service-row__image-wrapper">
                    <img className="service-row__img" src={props.src} alt={props.alt}></img>
                </div>
            </article>
        </React.Fragment>
    )
}