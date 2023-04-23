import React, { useEffect } from "react";
import "./userComments.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const UserComments = (props) =>{

    return(
        <div className="commentBoxContainer">
            <h4>
                {props.user}
            </h4>
            <p>
                {props.commentVal}
            </p>
        </div>
    )

}

export default UserComments;