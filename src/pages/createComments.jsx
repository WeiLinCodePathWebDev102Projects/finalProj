import React, {useEffect, useState} from "react";
import { supabase } from "../client";
import { useParams } from "react-router";

import "./createComment.css"

const CreateComment = (props) =>{
    
    const {id} = useParams();
    console.log(id);
    
    const [comment, setComment] = useState ({
        user: "Anonymous",
        commentVal: "",
        postId: id,
    });

    const [commentSize, setCommentSize] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setComment({ ...comment, [name]: value });
    };

    const handleSubmit = async (event) =>{
        event.preventDefault();

        //call superbase
        await supabase
            .from('comments')
            .insert({ user: comment.user,
                        comment: comment.commentVal,
                        postId: comment.postId,
                     })
        window.location = '/comments/'+id
    }

    return(
        <div className="addCommentForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="user"> User: </label>
                <input type ="text" id="user" name="user" value={comment.user} onChange={handleChange}/>
                <br />
                <label> Comment: </label>
                <input type ="text" id="commentVal" name="commentVal" value={comment.commentVal} onChange={handleChange}/>
                <br></br>
                <input type="submit" value="Post Comment"/>
            </form>
        </div>
    )


}

export default CreateComment;