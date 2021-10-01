import React, { useEffect, useState } from "react";
import { getPosts } from "../manangers/PostManager";
import { Post } from "./Post";

export const PostList = () => {

    const [posts, changePosts] = useState([]);

    const getPostsCall = () => {
        return getPosts().then(response => {
            changePosts(response);
            console.log(posts);
        });
    }

    useEffect(() => {
        getPostsCall()
    }, []);

    return (

        <div>
            {posts.map(post => <Post key={post.id} post={post}/> )}
        </div>
        
        
        
        )


}