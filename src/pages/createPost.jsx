import React, {useState} from "react";
import { supabase } from "../client";
import "../index.css"
import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CreatePost = () => {

    const [post, setPost] = useState({
        post_title: "",
        caption: "",
        image_ref: "",
        num_likes: 0,
        num_comments: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
            .from('hobbyhub')
            .insert({ post_title: post.post_title, 
                        caption: post.caption, 
                        image_ref: post.image_ref,
                        num_likes: post.num_likes,
                        num_comments: post.num_comments
                     });

        window.location = "/";
    };

    return(
        <div className="newPostCard">
            <form onSubmit={handleSubmit}>
                <label htmlFor="post_title"> Post Title: </label> 
                <input type ="text" id="post_title" name="post_title" value={post.post_title} onChange={handleChange}/>
                <br />

                {/* edit this into textbox */}
                <label htmlFor="caption"> Caption: </label> 
                <input type ="text" id="caption" name="caption" value={post.caption} onChange={handleChange}/>
                <br />

                <label htmlFor="image_ref"> Image: </label> 
                <input type ="text" id="image_ref" name="image_ref" value={post.image_ref} onChange={handleChange}/>
                <br />
                <input type="submit" value="Post"/>

            </form>
        </div>
        
    )
}

export default CreatePost;
