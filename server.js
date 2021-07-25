import express from "express";
const app = express();
const port = 3000;
app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendStatus(200) 
})


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})