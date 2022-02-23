import {Questions} from "./questions";
import React from "react";

export function ListQuestions() {
    return <div>
        <h1>All questions with correct answers</h1>
        {Questions.map(q =>
            <div key={q.id}>
                <h1>{q.question}</h1>
                <p>{q.answer}</p>
            </div>
        )}
    </div>;
}