import express from 'express'

const app = express()
app.use(express.json());

const users = []

app.post('/usuarios', (req, res) =>{

    console.log(req.body)
    res.status(201)
    res.send('ok postl');
})

app.get('/usuarios', (req, res) => {
    res.send('Ok')
})

app.listen(3000)