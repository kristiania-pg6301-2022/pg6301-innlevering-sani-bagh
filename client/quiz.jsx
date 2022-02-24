import {Questions, randomQuestion} from "./questions";
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

export function Quiz() {
    const [question, setQuestion] = useState(randomQuestion());
    const [answer, setAnswer] = useState();

    if (answer) {
        return <h1>{question.options[answer] === question.answer ? "The answer is correct" : "The answer is wrong"}</h1>;
    }


    return <div>
        <h1>{question.question}</h1>
        {Object.keys(question.options)
            .filter(option => question.options[option])
            .map(option => <p key={option}>
                <button onClick={() => setAnswer(option)}>{question.options[option]}</button>
            </p> )
        }
    </div>;
}