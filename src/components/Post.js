import React from "react";

export const Post = ({entry}) => {

    const newDate = new Date(entry.date);
    const formattedDate = newDate.toLocaleDateString();

    return (
        <section id="entry--${entry.id}" class="journalEntry">
            <h3>${entry.concepts}</h3>
            <p>${entry.journalEntry}</p>
            <p>${formattedDate}</p>
            <p>Mood: ${entry.mood} </p>

        </section>)



}