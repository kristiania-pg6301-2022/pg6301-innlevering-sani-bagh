import React, {useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import {Questions, randomQuestion} from "./questions";

function FrontPage() {
    return <div>
        <h1>Welcome to Quiz</h1>
        <div>
            <ul>
                <li><Link to={"/questions"}>Take quiz</Link></li>
                <li><Link to={"/answers"}>All questions with answers</Link></li>
            </ul>
        </div>
    </div>;
}

function Quiz() {
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

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/questions"} element={<Quiz/>}/>
                <Route path={"/*"} element={<h1>Not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application/>,
    document.getElementById("app"));