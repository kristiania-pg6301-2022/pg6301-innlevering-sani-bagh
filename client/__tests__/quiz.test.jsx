import {ListQuestions} from "../quiz";
import {render} from "react-dom";


describe("quiz pages", () => {
    it('should show questions list',  () => {
        const element = document.createElement("div");
        render(<ListQuestions/>, element);
        expect(element.innerHTML).toMatchSnapshot();
    });
});