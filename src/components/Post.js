import React from "react";

export const Post = ({post}) => {

     const newDate = new Date(post.date);
     const formattedDate = newDate.toLocaleDateString();

    return (
        <section className="journalEntry">
            <h3>{post.concept}</h3>
            <p>{post.journalEntry}</p>
            <p>{formattedDate}</p> 
            <p>Mood: {post.mood} </p>

        </section>)



}