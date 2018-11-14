const express = require('express')
const app = express()
// const routes = require('./routes/index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/', routes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})