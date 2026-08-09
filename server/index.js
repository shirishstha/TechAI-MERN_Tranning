const express = require("express");
const app = express();


const PORT = 8080;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/movie/:id', (req, res) => {
    res.send(req.params.name);
})
app.get('/movie', (req, res) => {
    res.json({
        success: true,
        data: {
            name: req.query.name
        }
    });
})

app.post('/movie/create',(req,res)=>{
    const data = req.body;
    //code to add movie in data base
    
    res.json({
        success:true,
        message:"Movie created successfully"
    })

})





app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
})