const express = require("express");
const env = require('dotenv');

env.config();
const app = express();


app.use(express.json());

app.use((req, res, next) => {
    const email= 'hello@gmail.com'
    const pass = 'hell'

    const dbemail= 'hello@gmail.com'
    const dbpass='hell'

    if(email === dbemail && pass === dbpass){
        next()
    }

    console.log('middleware executed');
})

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

app.post('/movie/create', (req, res) => {
    const data = req.body;
    //code to add movie in data base
    console.log(data);
    res.json({
        success: true,
        data: data,
        message: "Movie created successfully"
    })

})


app.put('/movie/update/:id', (req, res) => {
    const id = req.params.id;
    //code to update movie


    res.json({
        success: true,
        message: `Movie with ${id} has been updated.`
    })
})

app.delete('/movie/delete/:id', (req, res) => {
    const id = req.params.id;
    // code to delete movie 

    res.json({
        success: true,
        message: `Movie with ${id} has been deleted`
    })
})


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
})