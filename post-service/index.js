// post-service/index.js
const express = require("express");
const app = express();
app.use(express.json());

let posts = [];

app.post("/posts", (req, res) => {
    if (Math.random() < 0.5) {
        return res.status(500).json({ error: "Error simulado del servicio" });
    }
    const { title, content } = req.body;
    const newPost = { id: Date.now(), title, content };
    posts.push(newPost);
    res.status(201).json(newPost);
});



app.get("/posts", (req, res) => {
    res.json(posts);
});

app.listen(3001, () => console.log("Post Service running on port 3001"));
