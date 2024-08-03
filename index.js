import express from 'express'

const app = express();
const port = process.env.port || 3000;

app.get('/',(req,res) =>{ 
    res.send('server is running')
})

app.listen(port , (req,res) => {
    console.log(`port is running on ${port}`)
})