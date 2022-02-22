import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/questions"} element={<Quiz/>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application/>,
    document.getElementById("app"));