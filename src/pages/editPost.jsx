import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { supabase} from "../client";

const EditPost = ({data}) => {

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

    //function to delete post
    const deletePost = async (event) =>{
        event.preventDefault();

        await supabase
        .from('hobbyhub')
        .delete()
        .eq('id', id);

        window.location = "/";
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
        .from('hobbyhub')
        .update({
            post_title: post.post_title,
            caption: post.caption,
            image_ref: post.image_ref,
        })
        .eq('id', id);

        window.location = "/"
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost(prevPost => ({...prevPost, [name]: value}));
    }

    return(
        <div className="newPostCard">
            <form>
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
                <input type="submit" value="Update Post" onClick={updatePost}/>
                <button onClick={deletePost}> Delete </button>

            </form>
        </div>
    )
}

export default EditPost;