const express = require('express')
const request = require('express')
const app = express()
const routes = require('./routes/index')

// const config = {
//     client_id: '',
//     redirect_uri: 'http://localhost:3000/callback',
//     scope: 'me create_annotation manage_annotation vote',
//     state: '',
//     clientSecret: '',
//     response: ''
// }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})
  
app.use('/', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})