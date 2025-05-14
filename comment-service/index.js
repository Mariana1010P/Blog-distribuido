// comment-service/index.js
const express = require("express");
const app = express();
app.use(express.json());

let comments = {};

app.post("/comments/:postId", (req, res) => {
    const { postId } = req.params;
    const { text } = req.body;
    if (!comments[postId]) comments[postId] = [];
    comments[postId].push({ id: Date.now(), text });
    res.status(201).json(comments[postId]);
});

app.get("/comments/:postId", (req, res) => {
    res.json(comments[req.params.postId] || []);
});

app.listen(3002, () => console.log("Comment Service running on port 3002"));
