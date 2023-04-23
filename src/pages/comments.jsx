import React, {useEffect, useState} from "react";
import { useRoutes } from "react-router";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { supabase } from "../client";
import "./comments.css";

//components
import CreateComment from "./createComments";
import ReadComments from "./readComments";


const Comments = ({data}) => {
    
    const {id} = useParams();
    const [post, setPost] = useState({
        post_title: "",
        caption: "",
        image_ref: "",
        num_likes: 0,
        num_comments: 0,
    });

    const [comments, setComments] = useState([]);

    //setup routes
    let element = useRoutes([
        { path: "/addComments/:id", element: <CreateComment/>},
        
    ]);

    //calls fetch
    useEffect(() => {
        fetchPost();
        fetchComments();
    }, [id]);

    //function to fetch post
    const fetchPost = async () =>{
        const {data: postFromDB, error} = await supabase
        .from('hobbyhub')
        .select('*')
        .eq('id', id)
        .single();

        if (error){
            console.error('Error fetching Posts:', error);
        }
        else{
            setPost(postFromDB);
        }
    }

    //function to fetch comments
    const fetchComments = async () => {
        const {data} = await supabase
        .from('comments')
        .select()
        .eq("postId", id);
    
        // console.log(data);
        setComments(data);
    }

    return(
        <div className="commentContainer">
            <h2>
                {post.post_title}
            </h2>
            <p>
                {post.caption}
            </p>
            <img className="postImg" src={post.image_ref}/>

            <div className="commentBox">
                <h3>
                    Comments
                </h3>
                
                <Link to={'addComments/'+id}>
                    <button className="newComment">
                        Add Comments
                    </button>
                </Link>
                {element}

                <ReadComments data={comments}/>
                
            </div>

        </div>
    )

}

export default Comments;