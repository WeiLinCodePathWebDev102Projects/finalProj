import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../index.css";

import PostCard from "../components/postCard";

const ReadPost = (props) => {

    const [post, setPost] = useState([]);
    
    useEffect(() => {
        setPost(props.data);
    }, [props]);

    return(
        <div className="shopDisplays">
            {
                post && post.length > 0? 
                post.map((post, index) => 
                    <PostCard id={post.id} post_title={post.post_title} caption={post.caption} image_ref={post.image_ref} num_likes={post.num_likes} num_comments={post.num_comments}/> )
                    : <p> User has not Posted Anything </p>
            }
        </div>
    )
}

export default ReadPost;