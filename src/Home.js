import React from "react"
import "./Home.css"
import { InputCards } from "./components/InputCards"
import { Post } from "./components/Post"
import { PostList } from "./components/PostList"

export const Home = () => {
    return (
        <>
        <header>
            <h1>Brady's Journal</h1>
        </header>
        <InputCards />
        <PostList />
        </>

    )
}
