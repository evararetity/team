"use strict"
const   express = require("express"),
        hbs = require("express-handlebars");

let app = express(),
    router = express.Router();

app .set("views", `${__dirname}/views`)
    .set("port", process.env.PORT || 2020)
    .use(express.static(`${__dirname}/public`));

app.engine("handlebars", hbs.create({
    defaultLayout   : "common"
}).engine);
app.set("view engine", "handlebars");

router.route("/").get((req, res)=>{
    res.sendFile('./public/index.html');
});

app.use("/", router);

app.listen(app.get("port"), ()=>console.log(`Server listening on IP: 127.0.0.1 \+ PORT: ${app.get("port")}`));