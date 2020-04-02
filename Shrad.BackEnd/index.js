const express = require('express');
require('./dbConnection');
const router = require('./routers/index');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);


app.use((err, req, res, next) => {
    res.status(500).send('Error from handler-  '  + err)
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log('app work on port' + PORT)
})