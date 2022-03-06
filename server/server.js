import express from "express";
import {QuizApi} from "./routes/Quiz.js";
import path from "path";


const app = express();

app.use("/api/questions", QuizApi());


app.use(express.static("../client/dist"));


app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")){
        return res.sendFile(path.resolve("../client/dist/index.html"))
    } else {
        next();
    }
});

app.use((req, res) => {
    res.status(404)
        .send("Unknown Request");
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});