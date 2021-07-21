/* Author: Team */

const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const cors = require('cors');
let bodyParser = require("body-parser");
const {MongoClient} = require('mongodb');
const mongoUrl = "mongodb://ass3:2020@assignment3-shard-00-00.3zfwi.mongodb.net:27017,assignment3-shard-00-01.3zfwi.mongodb.net:27017,assignment3-shard-00-02.3zfwi.mongodb.net:27017/freelancer?ssl=true&replicaSet=atlas-7i888h-shard-0&authSource=admin&retryWrites=true&w=majority"

try {
    mongoose.connect(mongoUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    });
    
    console.log("Connected DB Successfully")

} catch (e) {
    console.error(e);
}

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors())

const app = express();

//Configurations
const port = process.env.PORT || 3000;
// const mongodb_url = "mongodb+srv://freelanceApp:oXbcg8hr0ZZEbDn4@cluster0.iaby6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());

//API Routes
app.use('/api',require('./api'));

//Frontend Routes
app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

//MongoDB Connection
mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.connection.on("error", err => {
    console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
    console.log("Mongoose connected");

    //App Listen
    app.listen(port, () => {
        console.log("App started on port:" + port)
    });
});

