import {Router} from "express";
import {Questions, randomQuestion} from "../questions.js";


export function QuizApi() {
    const router = new Router();
    router.get("/", (req, res) => {
        const question = randomQuestion();
        res.json({
            id: question.id,
            question: question.question,
            option_a: question.options.option_a,
            option_b: question.options.option_b,
            option_c: question.options.option_c
            }
        );
    });

    router.post("/answer", (req, res) => {
        const {id, answer} = req.body;

        const question = Questions.find((q) => q.id === id);
        const checkAnswer = question.options[answer] === question.answer ? "true" : "false";

        if (checkAnswer){
            return res.send({result: "Right"});
        }else {
            return res.send({result: "Wrong"});
        }
    });

    return router;
}


