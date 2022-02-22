import express from "express";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on http://localhost:${server.address().port}`);
});

app.get("/api/questions", (req, res) => {
    res.json({
        question: "Example question",
        answer: "Example answer",
    });
});

app.use(express.static("../client/dist"));