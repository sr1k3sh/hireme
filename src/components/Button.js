import React, { useEffect, useRef } from "react";
import { iteraction } from "../utils";

export default function Button(props){
    const btnRef = useRef();
    useEffect(()=>{
        iteraction(btnRef.current);
    })
    return(
        <button onClick={props.onClick} ref={btnRef} className={props.outline?"btn btn-outline-primary rikesh__btn-outline":"btn btn-primary rikesh__btn"}>{props.btnText}</button>
    )
}