import React from "react";
import "../index.css";
import "./postCard.css";
import more from './3dot.png';

import { useState } from "react";
import { Link } from "react-router-dom";

const PostCard = (props) =>{

    const [numLikes, setNumLikes] = useState(0);

    const updateLikeCount = () =>{
        setNumLikes(numLikes + 1);
    }

    return(
        <div className="post_card">
            <div className="editLink">
                <Link to={'editPost/'+props.id}>
                    <img src={more}/>
                </Link>
            </div>
            <br/>
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
                💬 Comment!
                </Link>
            </button>
        </div>
    )
}

export default PostCard;