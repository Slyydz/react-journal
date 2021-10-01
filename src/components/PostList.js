import React, { useEffect, useState } from "react";
import { getPosts } from "../manangers/PostManager";

export const PostList = () => {

    const [posts, changePosts] = useState();

    const getPostsCall = () => {
        return getPosts().then(response => {
            changePosts(response);
        });
    }

    useEffect(() => {getPostsCall()},[]);

    return (
        
    )

}