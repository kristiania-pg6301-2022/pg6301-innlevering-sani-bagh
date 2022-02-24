import {ListQuestions} from "../quiz";
import React from "react";
import ReactDOM  from "react-dom";


describe("list questions", () => {
    it('should show questions list',  () => {
        const element = document.createElement("div");
        ReactDOM.render(<ListQuestions/>, element);
        expect(element.querySelector("h1").innerHTML)
            .toEqual("All questions with correct answers");
        expect(element.innerHTML).toMatchSnapshot();
    });
});