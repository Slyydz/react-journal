import React, { useEffect, useState } from "react";
import { deletePost, getPosts, getPostsByMood } from "../manangers/PostManager";
import { Post } from "./Post";

export const PostList = () => {

    const [posts, changePosts] = useState([]);

    useEffect(() => {
        return getPosts().then(response => {
            changePosts(response);
        });
    }
    ,[posts]);

    const handleFilter = (e) => {
        getPostsByMood(e).then(response => {
            changePosts(response);
            console.log(response);
        })
    }

    const handleReset = (e) => {
        e.preventDefault();
        document.getElementById("filterMood").defaultValue = "Filter by Mood";
        console.log("reset pressed");
        getPosts().then(response => {
            changePosts(response);
        });
        
    }

    const handleDelete = (postId) => {
        deletePost(postId).then(response => changePosts)
    }

    return (

        <div>
            
            <fieldset className="filter-mood">
                        <select defaultValue="Filter by mood" name="filterMood" id="filterMood" onChange={event => handleFilter(event.target.value)}>
                            <option disabled={true}>Filter by mood</option>
                            <option value="Happy">Happy</option>
                            <option value="Ok">Ok</option>
                            <option value="Sad">Sad</option>
                        </select>
                        <button onClick={e => handleReset(e)}>See all posts</button>
            </fieldset>
            

            {posts.map(post => <Post key={post.id} post={post} handleDelete={handleDelete}/> )}
            
        </div>
        
        
        
        )


}