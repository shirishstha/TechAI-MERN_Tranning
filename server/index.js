const express = require("express");
const app = express();


const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
})


app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
})