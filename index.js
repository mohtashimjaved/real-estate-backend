import express from "express";

const app = express()

app.use(express.json())
let data = []

app.get("/", (req, res) => {
    res.send(data)
    res.status(200)
})

app.post("/data", (req, res) => {
    console.log(req.body[0]);
    data.push(req.body[0])
    res.send({user: req.body[0]  , message: "user succesfully added"})
})

app.listen(3000, () => {
    console.log("testing");
})