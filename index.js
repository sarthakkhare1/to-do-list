const express = require('express');
const port = 8000;
const app = express();
const db=require("./config/mongoose");
const bodyParser = require("body-parser")
app.set('view engine', 'ejs');
app.set('views', './views');
//app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets")); //to use static data such as html css

app.use('/',require('./routes/index'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
