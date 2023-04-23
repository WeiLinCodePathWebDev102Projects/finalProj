import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../index.css";

import UserComments from "../components/userComments";

const ReadComments = (props) => {

    console.log("props passed: ")
    const [comment, setComments] = useState([]);
    
    useEffect(() => {
        setComments(props.data);
        console.log(comment);
    }, [props]);

    return(
        <div>
            {
                comment && comment.length > 0 ? 
                comment.map((comment, index) =>
                    <UserComments user={comment.user} commentVal={comment.comment}/>
                )
                : <p> No comments available</p>
            }
        </div>
    )
}

export default ReadComments;