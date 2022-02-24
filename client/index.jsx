import React, {useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";


import {ListQuestions, Quiz} from "./quiz";

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





function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/questions"} element={<Quiz/>}/>
                <Route path={"/answers"} element={<ListQuestions/>}/>
                <Route path={"/*"} element={<h1>Not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application/>,
    document.getElementById("app"));