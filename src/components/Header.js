import React, {useRef,useEffect} from "react";
import { iteraction } from "../utils";

export default function Header (props){
    const myServices = useRef();

    useEffect(()=>{
        iteraction(myServices.current);
    },[])
    return(
        <React.Fragment>
            <h2 ref={myServices} className="rikesh__header">{props.title}</h2>
        </React.Fragment>
    )

}