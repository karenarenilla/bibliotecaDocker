require('app-module-path').addPath(__dirname);
import express from "express";
import Routes from "routes/routes";
import MongoConnection from "contrib/conections/mongo";
import bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

new Routes(app);
MongoConnection.getInstance();

app.listen(1300, () => {
    console.log("listen on port 1300");
});