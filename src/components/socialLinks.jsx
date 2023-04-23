import React from "react";
import "./social.css";

const SocialLinks = (props) => {
    
    return(
        <div className="linkButton">
            <a href={props.link}> {props.name} </a>
        </div>
        
    )
}

export default SocialLinks;