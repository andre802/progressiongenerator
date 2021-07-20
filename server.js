import express from "express";
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendStatus(200) 
})


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})