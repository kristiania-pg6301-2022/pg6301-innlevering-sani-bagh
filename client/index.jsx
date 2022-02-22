import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function FrontPage() {
    return <div>
        <h1>Welcome to Quiz</h1>
        <div>
            <Link to={"/questions"}>Take quiz</Link>
        </div>
    </div>;
}

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/questions"} element={<h1>Welcome to quiz</h1>}/>
                <Route path={"/*"} element={<h1>Not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application/>,
    document.getElementById("app"));