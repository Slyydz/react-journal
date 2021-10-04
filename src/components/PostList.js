import React, { useEffect, useState } from "react";
import { getPosts } from "../manangers/PostManager";
import { Post } from "./Post";

export const PostList = () => {

    const [posts, changePosts] = useState([]);

    useEffect(() => {
        return getPosts().then(response => {
            changePosts(response);
        });
    }
    ,[posts]);

    return (

        <div>
            {posts.map(post => <Post key={post.id} post={post}/> )}
        </div>
        
        
        
        )


}