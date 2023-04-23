import React from "react";
import "../index.css";
import "./postCard.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const PostCard = (props) =>{

    console.log(props.image_ref);

    const [numLikes, setNumLikes] = useState(0);

    const updateLikeCount = () =>{
        setNumLikes(numLikes + 1);
    }

    return(
        <div className="post_card">
            <Link to={'editPost/'+props.id}>
                .
            </Link>
            <h3>
                {props.post_title}
            </h3>
            <p>
                {props.caption}
            </p>
            {props.image_ref ? 
                <img className="imageLink" src={props.image_ref} />
             :  <p> No image Available </p>
            }
            <br></br>
            <br></br>
            
            <button className="likeButton" onClick={updateLikeCount}>
                ❤️ {numLikes}
            </button>   
            
            <button className="commentButton">
                <Link to={'comments/'+props.id}>
                💬 {props.num_comments}
                </Link>
            </button>
        </div>
    )
}

export default PostCard;