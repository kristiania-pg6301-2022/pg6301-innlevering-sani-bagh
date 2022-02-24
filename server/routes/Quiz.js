import express from "express";
import {Questions, randomQuestion} from "../questions";

export const App = express.Router();

App.get("/api/questions", (req, res) => {
   const question = randomQuestion();
   res.send(
       {
          id: question.id,
          question: question.question,
          options: question.options,
       }
   );
});

App.post("/api/questions", (req, res) => {
  const {id, answer} = req.body;

  const question = Questions.find((q) => q.id === id);
  const checkAnswer = question.options[answer] === question.answer ? "true" : "false";

  if (checkAnswer){
      return res.send({result: "Right"});
  }else {
      return res.send({result: "Wrong"});
  }

});
