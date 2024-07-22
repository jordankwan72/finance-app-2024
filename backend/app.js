


const express = require('express')
const cors = require('cors')

const app = express()
require('dotenv').config()


//middleware

app.use(express.json())
app.use(cors())

app.get('/', (request, response)=> {
    response.send('Sup')
})


const PORT = process.env.PORT

const server = () => {
    app.listen(PORT, () => {
        console.log('listening to port', PORT)
    })
}

server()