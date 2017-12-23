"use strict"
const   express = require("express"),
        hbs = require("express-handlebars"),
        mongoose = require("mongoose"),
        bodyParser = require("body-parser");

//import all local packages*********************************
const   route = require("./routes/route.js"),
        configs = require("./config/config.js");

mongoose.connect(configs.production.dbLocation)
        .connection.on("connected", ()=>console.log("Server connected to mongoDB through mongoose ODM"));

let app = express();

app .set("views", `${__dirname}/views`)
    .set("port", process.env.PORT || 2020)
    .use(express.static(`${__dirname}/public`))
    .use(bodyParser.urlencoded({extended: true}));

let hbsLayout = {
    defaultLayout : "common",
    partialDir : `${app.get("views")}/partials`
};

app .engine("handlebars", hbs.create(hbsLayout).engine)
    .set("view engine", "handlebars");

route(express, app);

app.listen(app.get("port"), ()=>console.log(`Server listening on IP: 127.0.0.1 \+ PORT: ${app.get("port")}`));