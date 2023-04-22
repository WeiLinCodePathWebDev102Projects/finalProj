import React from "react";
import "../index.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const PostCard = (props) =>{
    return(
        <div className="post_card">
            <Link to={'editPost/'+props.id}>
                <h3>
                    {props.post_title}
                </h3>
            </Link>
            <p>
                {props.caption}
            </p>
            {props.imageRef ? 
                <img src={props.image_ref} />
             :  <p> </p>
            }

            ❤️ {props.num_likes}  💬 {props.num_comments}
        </div>
    )
}

export default PostCard;