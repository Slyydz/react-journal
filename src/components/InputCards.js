import React, { useState } from "react";
import { createPost } from "../manangers/PostManager";
import "./InputCards.css"

export const InputCards = () => {

    const [inputConcept, changeInputConcept] = useState();
    const [inputJEntry, changeJEntry] = useState();
    const [inputMood, changeMood] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();

        const journalObj = {
            concept: inputConcept,
            journalEntry: inputJEntry,
            mood:   inputMood,
            date: Date.now()
        }

        createPost(journalObj);

        document.getElementById("wholeForm").reset();
        
    }

    const handleFilter = (e) => {
        console.log(e);
    }



    return (
        <form id="wholeForm">
            <section className="contentMain">
                <div className="inputForm">
                    <fieldset className="concept-field">
                        <label htmlFor="conceptCovered">Concepts</label>
                        <input type="text" name="conceptCover" id="conceptCovered" placeholder="Input concepts" onChange={event => changeInputConcept(event.target.value)}></input>
                    </fieldset>
                    <fieldset className="entry-field">
                        <label htmlFor="journalEntry">Journal Entry</label>
                        <textarea rows="5" cols="40" name="journalEntry" placeholder="Input entry" onChange={event => changeJEntry(event.target.value)}></textarea>
                    </fieldset>
                    <fieldset className="mood-field">
                        <label htmlFor="selectMood">Todays Mood</label>
                        <select name="selectMood" id="selectMood" onChange={event => changeMood(event.target.value)}>
                            <option>Choose a mood</option>
                            <option value="Happy">Happy</option>
                            <option value="Ok">Ok</option>
                            <option value="Sad">Sad</option>
                        </select>
                    </fieldset>
                </div>
            </section>

            <button onClick={(e) => handleSubmit(e)}>Submit</button>
            <fieldset className="filter-mood">
                        <select name="filterMood" id="filterMood" onChange={event => handleFilter(event.target.value)}>
                            <option>Filter by mood</option>
                            <option value="Happy">Happy</option>
                            <option value="Ok">Ok</option>
                            <option value="Sad">Sad</option>
                        </select>
                    </fieldset>
        </form>
    )
}

