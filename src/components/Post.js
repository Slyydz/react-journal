import React from "react";

export const Post = ({post, handleDelete}) => {

     const newDate = new Date(post.date);
     const formattedDate = newDate.toLocaleDateString();

    return (
        <section className="journalEntry">
            <h3>{post.concept}</h3>
            <p>{post.journalEntry}</p>
            <p>{formattedDate}</p> 
            <p>Mood: {post.mood} </p>

            <button type="button" onClick={() => handleDelete(post.id)}>Remove Post</button>

        </section>)



}