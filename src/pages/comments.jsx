import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { supabase } from "../client";
import "./comments.css";
import UserComments from "../components/userComments";

const Comments = ({data}) => {
    const {id} = useParams();

    const [post, setPost] = useState({
        post_title: "",
        caption: "",
        image_ref: [],
        num_likes: 0,
        num_comments: 0,
    })

    //calls fetch
    useEffect(() => {
        fetchPost();
    }, [id]);

    //function to fetch
    const fetchPost = async () =>{
        const {data: postFromDB, error} = await supabase
        .from('hobbyhub')
        .select('*')
        .eq('id', id)
        .single();

        if (error){
            console.error('Error fetching Crewmate:', error);
        }
        else{
            setPost(postFromDB);
        }
    }

    return(
        <div>
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

                <button className="newComment">
                    Add Comments
                </button>

                <br />
                <UserComments />
            </div>
        </div>
    )

}

export default Comments;