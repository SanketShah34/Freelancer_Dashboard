const express = require('express');
const mongoose = require("mongoose");
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const mongodb_url = "mongodb+srv://freelanceApp:oXbcg8hr0ZZEbDn4@cluster0.iaby6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.static(path.join(__dirname, './frontend/build')));
app.use('/api',require('./api'));
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});


mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on("error", err => {
    console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
    app.listen(port, () => {
        console.log("App started on port:" + port)
    });
});

